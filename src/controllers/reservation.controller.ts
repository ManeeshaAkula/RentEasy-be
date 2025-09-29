import { Request, Response } from 'express';
import * as ReservationService from '../services/reservation.service';

export const createReservation = async (req: Request, res: Response) => {
    try {
        const result = await ReservationService.createReservation(req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while creating Reservation data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const fetchAllReservationData = async (req: Request, res: Response) => {
    try {
        const result = await ReservationService.getAllReservationData();
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching all Reservations data:', error);
        res.status(500).json({ error: error });
    }
};

export const getReservationById = async (req: Request, res: Response) => {
    try {
        const result = await ReservationService.getReservationById(req.params.id);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching Reservation data:', error);
        res.status(500).json({ error: error });
    }
};

export const updateReservationById = async (req: Request, res: Response) => {
    try {
        const result = await ReservationService.updateReservationById(req.params.id, req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while updating Reservation data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};