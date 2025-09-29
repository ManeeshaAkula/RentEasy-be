import { OrderItem } from '../models/order_item.model';
import { OrderItemDTO } from "../dto/order_item.dto"

export const createOrderItem = async (data: OrderItemDTO) => {
  return await OrderItem.create(data);
};

export const getOrderItemById = async (id: string) => {
  return await OrderItem.findOne({ where: { id } });
};

export const getAllOrderItems = async () => {
  return await OrderItem.findAll();
};

export const updateOrderItemById = async (id: string, data: any) => {
  return await OrderItem.update(data, {
    where: { id }
  });
};
