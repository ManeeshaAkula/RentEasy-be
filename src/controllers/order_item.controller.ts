import { Request, Response } from 'express';
import * as OrderItemService from '../services/order_item.service';

export const createOrderItem = async (req: Request, res: Response) => {
    try {
        const result = await OrderItemService.createOrderItem(req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while creating OrderItem data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const fetchAllOrderItemData = async (req: Request, res: Response) => {
    try {
        const result = await OrderItemService.getAllOrderItemData();
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching all OrderItems data:', error);
        res.status(500).json({ error: error });
    }
};

export const getOrderItemById = async (req: Request, res: Response) => {
    try {
        const result = await OrderItemService.getOrderItemById(req.params.id);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching OrderItem data:', error);
        res.status(500).json({ error: error });
    }
};

export const updateOrderItemById = async (req: Request, res: Response) => {
    try {
        const result = await OrderItemService.updateOrderItemById(req.params.id, req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while updating OrderItem data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};