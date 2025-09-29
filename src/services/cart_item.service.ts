import { CartItemDTO } from '../dto/cart_item.dto';
import * as CartItemRepo from '../repositories/cart_item.repository';
import { successResponse, errorResponse, ApiResponse } from '../utils/responseBuilder';
import { CartItem } from '../models/cart_item.model';

export const createCartItem = async (dto: CartItemDTO): Promise<ApiResponse<CartItem>> => {
    try {
        const response = await CartItemRepo.createCartItem(dto);
        return successResponse(response, 'CartItem Data added successfully', 200);
    } catch (error) {
        return errorResponse('Failed to add CartItem Data', 500)
    }
};

export const getAllCartItemData = async (): Promise<ApiResponse<CartItem[]>> => {
    try {
        const allCartItemData = await CartItemRepo.getAllCartItems();
        return successResponse(allCartItemData, 'CartItems data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch All CartItems data', 500)

    }
};

export const getCartItemById = async (id: string): Promise<ApiResponse<CartItem | null>> => {
    try {
        const CartItemData = await CartItemRepo.getCartItemById(id);
        return successResponse(CartItemData, 'CartItem data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch CartItem data', 500)

    }
};

export const updateCartItemById = async (id: string, data: any): Promise<ApiResponse<{ affectedCount: number }>> => {
    try {
        const result = await CartItemRepo.updateCartItemById(id, data);
        const affectedCount = Array.isArray(result) ? result[0] : result;
        return successResponse({ affectedCount }, 'CartItem updated successfully', 200);
    } catch (error) {
        return errorResponse('Failed to update CartItem', 500)
    }
};
