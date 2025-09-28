import { User } from '../models/user.model';
import { UserDTO } from "../dto/user.dto"

export const createUser = async (data: UserDTO) => {
  return await User.create(data);
};

export const getUserById = async (id: string) => {
  return await User.findOne({ where: { id } });
};

export const getAllUsers = async () => {
  return await User.findAll();
};

export const updateUserById = async (id: string, data: any) => {
  return await User.update(data, {
    where: { id }
  });
};
