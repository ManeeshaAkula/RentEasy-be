import { Request, Response } from 'express';
import * as ProductAvailabilityService from '../services/product_availability.service';

export const createProductAvailability = async (req: Request, res: Response) => {
    try {
        const result = await ProductAvailabilityService.createProductAvailability(req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while creating ProductAvailability data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const fetchAllProductAvailabilityData = async (req: Request, res: Response) => {
    try {
        const result = await ProductAvailabilityService.getAllProductAvailabilityData();
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching all ProductAvailabilitys data:', error);
        res.status(500).json({ error: error });
    }
};

export const getProductAvailabilityById = async (req: Request, res: Response) => {
    try {
        const result = await ProductAvailabilityService.getProductAvailabilityById(req.params.id);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching ProductAvailability data:', error);
        res.status(500).json({ error: error });
    }
};

export const updateProductAvailabilityById = async (req: Request, res: Response) => {
    try {
        const result = await ProductAvailabilityService.updateProductAvailabilityById(req.params.id, req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while updating ProductAvailability data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};