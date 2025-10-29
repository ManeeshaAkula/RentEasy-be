import { Op } from 'sequelize';
import { User } from '../models/user.model';
import { UserDTO } from "../dto/user.dto";

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

export const findByEmailOrMobile = async (email_id: string | null, mobile: string | null) => {
  const orConditions: any[] = [];
  if (email_id !== null) {
    orConditions.push({ email_id });
  }
  if (mobile !== null) {
    orConditions.push({ mobile });
  }
  return User.findOne({ where: { [Op.or]: orConditions } });
};

export const findByEmailOrMobileAndRole = async (
  email_id: string | null,
  mobile: string | null,
  role_id: string | null
) => {
  const orConditions: any[] = [];
  if (email_id) orConditions.push({ email_id });
  if (mobile) orConditions.push({ mobile });

  const whereClause: any = {};

  if (orConditions.length > 0) {
    whereClause[Op.or] = orConditions;
  }

  if (role_id) {
    whereClause.role_id = role_id;
  }

  return User.findOne({ where: whereClause });
};

