import { OrderDTO } from '../dto/order.dto';
import * as OrderRepo from '../repositories/order.repository';
import { successResponse, errorResponse, ApiResponse } from '../utils/responseBuilder';
import { Order } from '../models/order.model';

export const createOrder = async (dto: OrderDTO): Promise<ApiResponse<Order>> => {
    try {
        const response = await OrderRepo.createOrder(dto);
        return successResponse(response, 'Order Data added successfully', 200);
    } catch (error) {
        return errorResponse('Failed to add Order Data', 500)
    }
};

export const getAllOrderData = async (): Promise<ApiResponse<Order[]>> => {
    try {
        const allOrderData = await OrderRepo.getAllOrders();
        return successResponse(allOrderData, 'Orders data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch All Orders data', 500)

    }
};

export const getOrderById = async (id: string): Promise<ApiResponse<Order | null>> => {
    try {
        const OrderData = await OrderRepo.getOrderById(id);
        return successResponse(OrderData, 'Order data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch Order data', 500)

    }
};

export const updateOrderById = async (id: string, data: any): Promise<ApiResponse<{ affectedCount: number }>> => {
    try {
        const result = await OrderRepo.updateOrderById(id, data);
        const affectedCount = Array.isArray(result) ? result[0] : result;
        return successResponse({ affectedCount }, 'Order updated successfully', 200);
    } catch (error) {
        return errorResponse('Failed to update Order', 500)
    }
};
