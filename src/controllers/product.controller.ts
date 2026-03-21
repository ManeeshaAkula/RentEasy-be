import { Request, Response } from 'express';
import * as ProductService from '../services/product.service';

export const createProduct = async (req: Request, res: Response) => {
    try {
        console.log("......... request body in product", req.body)
        console.log("......... file info", req.file);
        let image_url = "";
        if (req.file) {
            image_url = `/uploads/${req.file.filename}`;
        }

        const dto = {
            ...req.body,
            image_url,
        };

        const result = await ProductService.createProduct(dto);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.log("......... error in catch controller", error)
        console.error('Error while creating Product data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// export const fetchAllProductData = async (req: Request, res: Response) => {
//     try {
//         const result = await ProductService.getAllProductData();
//         if (result.error) {
//             return res.status(result.status).json({ message: result.message });
//         }

//         return res.status(result.status).json({
//             message: result.message,
//             data: result.data
//         });
//     } catch (error) {
//         console.error('Error while fetching all Products data:', error);
//         res.status(500).json({ error: error });
//     }
// };

export const fetchAllProductData = async (req: Request, res: Response) => {
    try {
        const q = typeof req.query.q === "string" ? req.query.q.trim() : "";
        const result = await ProductService.getAllProductData(q);

        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error("Error while fetching all Products data:", error);
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

export const getProductsBySellerId = async (req: Request, res: Response) => {
    try {
        const { seller_id } = req.params;
        const result = await ProductService.getProductsBySellerId(seller_id);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error("Error fetching products by userId:", error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};