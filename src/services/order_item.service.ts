import { OrderItemDTO } from '../dto/order_item.dto';
import * as OrderItemRepo from '../repositories/order_item.repository';
import { successResponse, errorResponse, ApiResponse } from '../utils/responseBuilder';
import { OrderItem } from '../models/order_item.model';

export const createOrderItem = async (dto: OrderItemDTO): Promise<ApiResponse<OrderItem>> => {
    try {
        const response = await OrderItemRepo.createOrderItem(dto);
        return successResponse(response, 'OrderItem Data added successfully', 200);
    } catch (error) {
        return errorResponse('Failed to add OrderItem Data', 500)
    }
};

export const getAllOrderItemData = async (): Promise<ApiResponse<OrderItem[]>> => {
    try {
        const allOrderItemData = await OrderItemRepo.getAllOrderItems();
        return successResponse(allOrderItemData, 'OrderItems data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch All OrderItems data', 500)

    }
};

export const getOrderItemById = async (id: string): Promise<ApiResponse<OrderItem | null>> => {
    try {
        const OrderItemData = await OrderItemRepo.getOrderItemById(id);
        return successResponse(OrderItemData, 'OrderItem data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch OrderItem data', 500)

    }
};

export const updateOrderItemById = async (id: string, data: any): Promise<ApiResponse<{ affectedCount: number }>> => {
    try {
        const result = await OrderItemRepo.updateOrderItemById(id, data);
        const affectedCount = Array.isArray(result) ? result[0] : result;
        return successResponse({ affectedCount }, 'OrderItem updated successfully', 200);
    } catch (error) {
        return errorResponse('Failed to update OrderItem', 500)
    }
};
