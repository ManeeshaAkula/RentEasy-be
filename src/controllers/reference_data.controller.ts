import { Request, Response } from 'express';
import * as ReferenceDataService from '../services/reference_data.service';

export const createReferenceData = async (req: Request, res: Response) => {
    try {
        const result = await ReferenceDataService.createReferenceData(req.body);
        console.log("........ resule in controler", result)
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.log("........ error in controller", error)
        console.error('Error while creating ReferenceData:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getReferenceDataById = async (req: Request, res: Response) => {
    try {
        const result = await ReferenceDataService.getReferenceDataById(req.params.id);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching ReferenceData:', error);
        res.status(500).json({ error: error });
    }
};

export const getReferenceDataByCategory = async (req: Request, res: Response) => {
    try {
        const result = await ReferenceDataService.getReferenceDataByCategory(req.params.category);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching ReferenceData:', error);
        res.status(500).json({ error: error });
    }
};