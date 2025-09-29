import { ProductAvailabilityDTO } from '../dto/product_availability.dto';
import * as ProductAvailabilityRepo from '../repositories/product_availability.repository';
import { successResponse, errorResponse, ApiResponse } from '../utils/responseBuilder';
import { ProductAvailability } from '../models/product_availability.model';

export const createProductAvailability = async (dto: ProductAvailabilityDTO): Promise<ApiResponse<ProductAvailability>> => {
    try {
        const response = await ProductAvailabilityRepo.createProductAvailability(dto);
        return successResponse(response, 'ProductAvailability Data added successfully', 200);
    } catch (error) {
        return errorResponse('Failed to add ProductAvailability Data', 500)
    }
};

export const getAllProductAvailabilityData = async (): Promise<ApiResponse<ProductAvailability[]>> => {
    try {
        const allProductAvailabilityData = await ProductAvailabilityRepo.getAllProductAvailabilitys();
        return successResponse(allProductAvailabilityData, 'ProductAvailabilitys data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch All ProductAvailabilitys data', 500)

    }
};

export const getProductAvailabilityById = async (id: string): Promise<ApiResponse<ProductAvailability | null>> => {
    try {
        const ProductAvailabilityData = await ProductAvailabilityRepo.getProductAvailabilityById(id);
        return successResponse(ProductAvailabilityData, 'ProductAvailability data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch ProductAvailability data', 500)

    }
};

export const updateProductAvailabilityById = async (id: string, data: any): Promise<ApiResponse<{ affectedCount: number }>> => {
    try {
        const result = await ProductAvailabilityRepo.updateProductAvailabilityById(id, data);
        const affectedCount = Array.isArray(result) ? result[0] : result;
        return successResponse({ affectedCount }, 'ProductAvailability updated successfully', 200);
    } catch (error) {
        return errorResponse('Failed to update ProductAvailability', 500)
    }
};
