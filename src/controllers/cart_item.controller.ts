import { Request, Response } from 'express';
import * as CartItemService from '../services/cart_item.service';

export const createCartItem = async (req: Request, res: Response) => {
    try {
        const result = await CartItemService.createCartItem(req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while creating CartItem data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const fetchAllCartItemData = async (req: Request, res: Response) => {
    try {
        const result = await CartItemService.getAllCartItemData();
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching all CartItems data:', error);
        res.status(500).json({ error: error });
    }
};

export const getCartItemById = async (req: Request, res: Response) => {
    try {
        const result = await CartItemService.getCartItemById(req.params.id);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching CartItem data:', error);
        res.status(500).json({ error: error });
    }
};

export const updateCartItemById = async (req: Request, res: Response) => {
    try {
        const result = await CartItemService.updateCartItemById(req.params.id, req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while updating CartItem data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};