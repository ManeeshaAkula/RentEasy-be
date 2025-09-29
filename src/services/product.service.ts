import { ProductDTO } from '../dto/product.dto';
import * as ProductRepo from '../repositories/product.repository';
import { successResponse, errorResponse, ApiResponse } from '../utils/responseBuilder';
import { Product } from '../models/product.model';

export const createProduct = async (dto: ProductDTO): Promise<ApiResponse<Product>> => {
    try {
        const response = await ProductRepo.createProduct(dto);
        return successResponse(response, 'Product Data added successfully', 200);
    } catch (error) {
        return errorResponse('Failed to add Product Data', 500)
    }
};

export const getAllProductData = async (): Promise<ApiResponse<Product[]>> => {
    try {
        const allProductData = await ProductRepo.getAllProducts();
        return successResponse(allProductData, 'Products data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch All Products data', 500)

    }
};

export const getProductById = async (id: string): Promise<ApiResponse<Product | null>> => {
    try {
        const ProductData = await ProductRepo.getProductById(id);
        return successResponse(ProductData, 'Product data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch Product data', 500)

    }
};

export const updateProductById = async (id: string, data: any): Promise<ApiResponse<{ affectedCount: number }>> => {
    try {
        const result = await ProductRepo.updateProductById(id, data);
        const affectedCount = Array.isArray(result) ? result[0] : result;
        return successResponse({ affectedCount }, 'Product updated successfully', 200);
    } catch (error) {
        return errorResponse('Failed to update Product', 500)
    }
};
