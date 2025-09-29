import { CartItem } from '../models/cart_item.model';
import { CartItemDTO } from "../dto/cart_item.dto"

export const createCartItem = async (data: CartItemDTO) => {
  return await CartItem.create(data);
};

export const getCartItemById = async (id: string) => {
  return await CartItem.findOne({ where: { id } });
};

export const getAllCartItems = async () => {
  return await CartItem.findAll();
};

export const updateCartItemById = async (id: string, data: any) => {
  return await CartItem.update(data, {
    where: { id }
  });
};
