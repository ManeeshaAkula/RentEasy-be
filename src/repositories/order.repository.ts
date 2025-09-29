import { Order } from '../models/order.model';
import { OrderDTO } from "../dto/order.dto"

export const createOrder = async (data: OrderDTO) => {
  return await Order.create(data);
};

export const getOrderById = async (id: string) => {
  return await Order.findOne({ where: { id } });
};

export const getAllOrders = async () => {
  return await Order.findAll();
};

export const updateOrderById = async (id: string, data: any) => {
  return await Order.update(data, {
    where: { id }
  });
};
