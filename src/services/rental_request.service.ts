import { RentalRequestDTO } from '../dto/rental_request.dto';
import * as RentalRequestRepo from '../repositories/rental_request.repository';
import { successResponse, errorResponse, ApiResponse } from '../utils/responseBuilder';
import { RentalRequest } from '../models/rental_request.model';

export const createRentalRequest = async (dto: RentalRequestDTO): Promise<ApiResponse<RentalRequest>> => {
    try {
        const response = await RentalRequestRepo.createRentalRequest(dto);
        return successResponse(response, 'RentalRequest Data added successfully', 200);
    } catch (error) {
        return errorResponse('Failed to add RentalRequest Data', 500)
    }
};

export const getAllRentalRequestData = async (): Promise<ApiResponse<RentalRequest[]>> => {
    try {
        const allRentalRequestData = await RentalRequestRepo.getAllRentalRequests();
        return successResponse(allRentalRequestData, 'RentalRequests data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch All RentalRequests data', 500)

    }
};

export const getRentalRequestById = async (id: string): Promise<ApiResponse<RentalRequest | null>> => {
    try {
        const RentalRequestData = await RentalRequestRepo.getRentalRequestById(id);
        return successResponse(RentalRequestData, 'RentalRequest data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch RentalRequest data', 500)

    }
};

export const updateRentalRequestById = async (id: string, data: any): Promise<ApiResponse<{ affectedCount: number }>> => {
    try {
        const result = await RentalRequestRepo.updateRentalRequestById(id, data);
        const affectedCount = Array.isArray(result) ? result[0] : result;
        return successResponse({ affectedCount }, 'RentalRequest updated successfully', 200);
    } catch (error) {
        return errorResponse('Failed to update RentalRequest', 500)
    }
};
