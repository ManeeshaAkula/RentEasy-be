import { Request, Response } from 'express';
import * as UserService from '../services/user.service';

export const login = async (req: Request, res: Response) => {
  try {
    const result = await UserService.login(req.body);
    if (result.error) {
      return res.status(result.status).json({ message: result.message });
    }
    return res
      .status(result.status)
      .json({ message: result.message, data: result.data, token: result.token });
  } catch {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

// optional: separate register endpoint that uses createUser (no token expected unless your service returns one)
export const register = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);
    if (result.error) {
      return res.status(result.status).json({ message: result.message });
    }
    return res
      .status(result.status)
      .json({ message: result.message, data: result.data });
  } catch {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
