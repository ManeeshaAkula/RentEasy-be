import { Router } from 'express';
import express from "express";
import path from "path";
import CartItemRoutes from './cart_item.routes';
import CartRoutes from './cart.routes';
import InvoiceRoutes from './invoice.routes';
import OrderItemRoutes from './order_item.routes';
import OrderRoutes from './order.routes';
import ProductAvailabilityRoutes from './product_availability.routes';
import ProductRoutes from './product.routes';
import ReferenceDataRoutes from './reference_data.routes';
import RentalRequestRoutes from './rental_request.routes';
import ReservationRoutes from './reservation.routes';
import userRoutes from './user.routes';
import checkoutRoutes from './checkout.routes';


const router = Router();

router.use('/cart_item', CartItemRoutes);
router.use('/cart', CartRoutes);
router.use('/invoice', InvoiceRoutes);
router.use('/order-item', OrderItemRoutes);
router.use('/order', OrderRoutes);
router.use('/product-availability', ProductAvailabilityRoutes);
router.use('/product', ProductRoutes);
router.use('/reference-data', ReferenceDataRoutes);
router.use('/rental-request', RentalRequestRoutes);
router.use('/reservation', ReservationRoutes);
router.use('/user', userRoutes);
router.use("/checkout", checkoutRoutes);
router.use("/receipts", express.static(path.join(process.cwd(), "public", "receipts")));

export default router;
