import path from "path";
import { Request, Response } from "express";
import { sequelize } from "../config/database";
import { Product } from "../models/product.model";
import { Order } from "../models/order.model";
import { OrderItem } from "../models/order_item.model";
import { User } from "../models/user.model";
import { ReferenceData } from "../models/reference_data.model";
import { receiptTemplate } from "../templates/receiptTemplate";
import { htmlToPdfFile } from "../services/pdfService.service";

const money = (n: number) => (Number(n || 0)).toFixed(2);

export const checkout = async (req: Request, res: Response) => {
    const { buyer_id, items } = req.body || {};

    if (!buyer_id || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ message: "buyer_id and items are required" });
    }

    const normalized = items.map((it: any) => ({
        product_id: String(it.product_id),
        qty: Math.max(1, Number(it.qty) || 1),
        start_date: it.start_date,
        end_date: it.end_date,
    }));

    try {
        const result = await sequelize.transaction(async (t) => {
            const buyer = await User.findOne({
                where: { id: buyer_id },
                transaction: t,
            });

            if (!buyer) {
                throw new Error("BUYER_NOT_FOUND");
            }

            const pendingStatus = await ReferenceData.findOne({
                where: {
                    category: "ORDER_STATUS",
                    code: "PENDING",
                },
                transaction: t,
            });

            if (!pendingStatus) {
                throw new Error("ORDER_STATUS_NOT_FOUND");
            }

            const productIds = normalized.map((x) => x.product_id);

            const products = await Product.findAll({
                where: { id: productIds },
                transaction: t,
                lock: t.LOCK.UPDATE,
            });

            const byId = new Map(products.map((p) => [String(p.id), p]));

            for (const it of normalized) {
                const p = byId.get(it.product_id);
                if (!p) {
                    throw new Error("PRODUCT_NOT_FOUND");
                }

                const available = Number(p.quantity) || 0;
                if (available < it.qty) {
                    throw new Error("INSUFFICIENT_STOCK");
                }
            }

            const today = new Date().toISOString().slice(0, 10);

            const itemLines = normalized.map((it) => {
                const p = byId.get(it.product_id)!;
                const start = new Date(it.start_date || today);
                const end = new Date(it.end_date || it.start_date || today);

                const diffMs = end.getTime() - start.getTime();
                const days = Math.max(1, Math.ceil(diffMs / (1000 * 60 * 60 * 24)) + 1);

                const pricePerDay = Number(p.price_per_day) || 0;
                const lineSubtotal = it.qty * days * pricePerDay;

                return {
                    product: p,
                    qty: it.qty,
                    days,
                    start_date: start.toISOString().slice(0, 10),
                    end_date: end.toISOString().slice(0, 10),
                    pricePerDay,
                    lineSubtotal,
                };
            });

            const subtotal = itemLines.reduce((sum, line) => sum + line.lineSubtotal, 0);
            const tax = 0;
            const total = subtotal + tax;

            const order = await Order.create(
                {
                    buyer_id,
                    status_id: pendingStatus.id,
                    subtotal,
                    tax,
                    total,
                    currency: "USD",
                } as any,
                { transaction: t }
            );

            for (const line of itemLines) {
                await OrderItem.create(
                    {
                        order_id: order.id,
                        product_id: line.product.id,
                        seller_id: line.product.seller_id,
                        qty: line.qty,
                        start_date: line.start_date,
                        end_date: line.end_date,
                        days: line.days,
                        price_per_day: line.pricePerDay,
                        subtotal: line.lineSubtotal,
                    } as any,
                    { transaction: t }
                );

                line.product.quantity = (Number(line.product.quantity) || 0) - line.qty;
                await line.product.save({ transaction: t });
            }

            const buyerName =
                `${buyer.first_name || ""} ${buyer.last_name || ""}`.trim() || "Buyer";

            const createdAt = new Date().toISOString().slice(0, 10);

            const html = receiptTemplate({
                orderId: String(order.id),
                buyerName,
                createdAt,
                currency: "USD",
                subtotal: money(subtotal),
                tax: money(tax),
                total: money(total),
                items: itemLines.map((x) => ({
                    title: x.product.title,
                    qty: x.qty,
                    days: x.days,
                    pricePerDay: money(x.pricePerDay),
                    lineTotal: money(x.lineSubtotal),
                })),
            });

            const outDir = path.join(process.cwd(), "public", "receipts");
            const fileName = `receipt-${order.id}.pdf`;

            await htmlToPdfFile(html, outDir, fileName);

            const receiptUrl = `${req.protocol}://${req.get("host")}/receipts/${fileName}`;

            return {
                orderId: order.id,
                receiptUrl,
            };
        });

        return res.status(200).json({ data: result });
    } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e);
        console.error("Checkout error:", e);

        if (msg === "INSUFFICIENT_STOCK") {
            return res.status(409).json({ message: "Not enough stock" });
        }

        if (msg === "PRODUCT_NOT_FOUND") {
            return res.status(404).json({ message: "Product not found" });
        }

        if (msg === "BUYER_NOT_FOUND") {
            return res.status(404).json({ message: "Buyer not found" });
        }

        if (msg === "ORDER_STATUS_NOT_FOUND") {
            return res.status(500).json({ message: "Pending order status not configured in reference_data" });
        }

        return res.status(500).json({ message: msg || "Checkout failed" });
    }
};