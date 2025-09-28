import { ReferenceData } from '../models/reference_data.model';
import { ReferenceDataDTO } from "../dto/reference_data.dto"

export const createReferenceData = async (data: ReferenceDataDTO) => {
    return await ReferenceData.create(data);
};

export const getReferenceDataById = async (id: string) => {
    return await ReferenceData.findOne({ where: { id } });
};

export const getReferenceDataByCategory = async (category: string) => {
    return await ReferenceData.findOne({ where: { category } });
};
