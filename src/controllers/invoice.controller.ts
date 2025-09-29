import { Request, Response } from 'express';
import * as InvoiceService from '../services/invoice.service';

export const createInvoice = async (req: Request, res: Response) => {
    try {
        const result = await InvoiceService.createInvoice(req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while creating Invoice data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const fetchAllInvoiceData = async (req: Request, res: Response) => {
    try {
        const result = await InvoiceService.getAllInvoiceData();
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching all Invoices data:', error);
        res.status(500).json({ error: error });
    }
};

export const getInvoiceById = async (req: Request, res: Response) => {
    try {
        const result = await InvoiceService.getInvoiceById(req.params.id);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching Invoice data:', error);
        res.status(500).json({ error: error });
    }
};

export const updateInvoiceById = async (req: Request, res: Response) => {
    try {
        const result = await InvoiceService.updateInvoiceById(req.params.id, req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while updating Invoice data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};