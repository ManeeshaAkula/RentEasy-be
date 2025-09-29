import { Request, Response } from 'express';
import * as OrderService from '../services/order.service';

export const createOrder = async (req: Request, res: Response) => {
    try {
        const result = await OrderService.createOrder(req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while creating Order data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const fetchAllOrderData = async (req: Request, res: Response) => {
    try {
        const result = await OrderService.getAllOrderData();
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching all Orders data:', error);
        res.status(500).json({ error: error });
    }
};

export const getOrderById = async (req: Request, res: Response) => {
    try {
        const result = await OrderService.getOrderById(req.params.id);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching Order data:', error);
        res.status(500).json({ error: error });
    }
};

export const updateOrderById = async (req: Request, res: Response) => {
    try {
        const result = await OrderService.updateOrderById(req.params.id, req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while updating Order data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};