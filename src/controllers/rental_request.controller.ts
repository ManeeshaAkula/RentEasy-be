import { Request, Response } from 'express';
import * as RentalRequestService from '../services/rental_request.service';

export const createRentalRequest = async (req: Request, res: Response) => {
    try {
        const result = await RentalRequestService.createRentalRequest(req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while creating RentalRequest data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const fetchAllRentalRequestData = async (req: Request, res: Response) => {
    try {
        const result = await RentalRequestService.getAllRentalRequestData();
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching all RentalRequests data:', error);
        res.status(500).json({ error: error });
    }
};

export const getRentalRequestById = async (req: Request, res: Response) => {
    try {
        const result = await RentalRequestService.getRentalRequestById(req.params.id);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching RentalRequest data:', error);
        res.status(500).json({ error: error });
    }
};

export const updateRentalRequestById = async (req: Request, res: Response) => {
    try {
        const result = await RentalRequestService.updateRentalRequestById(req.params.id, req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while updating RentalRequest data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};