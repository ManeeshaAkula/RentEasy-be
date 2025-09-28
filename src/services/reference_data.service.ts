import { ReferenceDataDTO } from '../dto/reference_data.dto';
import * as ReferenceDataRepo from '../repositories/reference_data.repository';
import { successResponse, errorResponse, ApiResponse } from '../utils/responseBuilder';
import { ReferenceData } from '../models/reference_data.model';

export const createReferenceData = async (dto: ReferenceDataDTO): Promise<ApiResponse<ReferenceData>> => {
    try {
        const response = await ReferenceDataRepo.createReferenceData(dto);
        return successResponse(response, 'ReferenceData Data added successfully', 200);
    } catch (error) {
        return errorResponse('Failed to add ReferenceData Data', 500)
    }
};

export const getReferenceDataById = async (id: string): Promise<ApiResponse<ReferenceData | null>> => {
    try {
        const referenceDataResponse = await ReferenceDataRepo.getReferenceDataById(id);
        return successResponse(referenceDataResponse, 'ReferenceData fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch All ReferenceData', 500)

    }
};

export const getReferenceDataByCategory = async (category: string): Promise<ApiResponse<ReferenceData | null>> => {
    try {
        const ReferenceDataData = await ReferenceDataRepo.getReferenceDataByCategory(category);
        return successResponse(ReferenceDataData, 'ReferenceData fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch ReferenceData data', 500)
    }
};
