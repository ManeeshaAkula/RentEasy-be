import { Request, Response } from 'express';
import * as UserService from '../services/user.service';
import { normalizeEmail, normalizeMobile } from '../utils/normalizers';
import { User, ReferenceData } from '../models';

export const createUser = async (req: Request, res: Response) => {
    try {
        console.log(".......... request body", req.body)
        const result = await UserService.createUser(req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.log("........... error in controller", error)
        console.error('Error while creating User data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        console.log(".......... request body", req.body)
        const result = await UserService.login(req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.log("........... error in controller", error)
        console.error('Error while creating User data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


export const fetchAllUserData = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getAllUserData();
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching all Users data:', error);
        res.status(500).json({ error: error });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getUserById(req.params.id);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data
        });
    } catch (error) {
        console.error('Error while fetching User data:', error);
        res.status(500).json({ error: error });
    }
};

export const updateUserById = async (req: Request, res: Response) => {
    try {
        const result = await UserService.updateUserById(req.params.id, req.body);
        if (result.error) {
            return res.status(result.status).json({ message: result.message });
        }

        return res.status(result.status).json({
            message: result.message,
            data: result.data

        });
    } catch (error) {
        console.error('Error while updating User data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};