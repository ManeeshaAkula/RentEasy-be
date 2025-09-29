import { Cart } from '../models/cart.model';
import { CartDTO } from "../dto/cart.dto"

export const createCart = async (data: CartDTO) => {
  return await Cart.create(data);
};

export const getCartById = async (id: string) => {
  return await Cart.findOne({ where: { id } });
};

export const getAllCarts = async () => {
  return await Cart.findAll();
};

export const updateCartById = async (id: string, data: any) => {
  return await Cart.update(data, {
    where: { id }
  });
};
