import { Request, Response } from 'express';
import * as ProductService from '../services/product.service';

export const createProduct = async (req: Request, res: Response) => {
    try {
        const result = await ProductService.createProduct(req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while creating Product data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const fetchAllProductData = async (req: Request, res: Response) => {
    try {
        const result = await ProductService.getAllProductData();
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching all Products data:', error);
        res.status(500).json({ error: error });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const result = await ProductService.getProductById(req.params.id);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching Product data:', error);
        res.status(500).json({ error: error });
    }
};

export const updateProductById = async (req: Request, res: Response) => {
    try {
        const result = await ProductService.updateProductById(req.params.id, req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while updating Product data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};