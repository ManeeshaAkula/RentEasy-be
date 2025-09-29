import { Request, Response } from 'express';
import * as CartService from '../services/cart.service';

export const createCart = async (req: Request, res: Response) => {
    try {
        const result = await CartService.createCart(req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while creating Cart data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const fetchAllCartData = async (req: Request, res: Response) => {
    try {
        const result = await CartService.getAllCartData();
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching all Carts data:', error);
        res.status(500).json({ error: error });
    }
};

export const getCartById = async (req: Request, res: Response) => {
    try {
        const result = await CartService.getCartById(req.params.id);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching Cart data:', error);
        res.status(500).json({ error: error });
    }
};

export const updateCartById = async (req: Request, res: Response) => {
    try {
        const result = await CartService.updateCartById(req.params.id, req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while updating Cart data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};