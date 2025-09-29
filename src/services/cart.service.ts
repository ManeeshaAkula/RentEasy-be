import { CartDTO } from '../dto/cart.dto';
import * as CartRepo from '../repositories/cart.repository';
import { successResponse, errorResponse, ApiResponse } from '../utils/responseBuilder';
import { Cart } from '../models/cart.model';

export const createCart = async (dto: CartDTO): Promise<ApiResponse<Cart>> => {
    try {
        const response = await CartRepo.createCart(dto);
        return successResponse(response, 'Cart Data added successfully', 200);
    } catch (error) {
        return errorResponse('Failed to add Cart Data', 500)
    }
};

export const getAllCartData = async (): Promise<ApiResponse<Cart[]>> => {
    try {
        const allCartData = await CartRepo.getAllCarts();
        return successResponse(allCartData, 'Carts data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch All Carts data', 500)

    }
};

export const getCartById = async (id: string): Promise<ApiResponse<Cart | null>> => {
    try {
        const CartData = await CartRepo.getCartById(id);
        return successResponse(CartData, 'Cart data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch Cart data', 500)

    }
};

export const updateCartById = async (id: string, data: any): Promise<ApiResponse<{ affectedCount: number }>> => {
    try {
        const result = await CartRepo.updateCartById(id, data);
        const affectedCount = Array.isArray(result) ? result[0] : result;
        return successResponse({ affectedCount }, 'Cart updated successfully', 200);
    } catch (error) {
        return errorResponse('Failed to update Cart', 500)
    }
};
