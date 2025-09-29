import { RentalRequest } from '../models/rental_request.model';
import { RentalRequestDTO } from "../dto/rental_request.dto";

export const createRentalRequest = async (data: RentalRequestDTO) => {
    return await RentalRequest.create(data);
};

export const getRentalRequestById = async (id: string) => {
    return await RentalRequest.findOne({ where: { id } });
};

export const getAllRentalRequests = async () => {
    return await RentalRequest.findAll();
};

export const updateRentalRequestById = async (id: string, data: any) => {
    return await RentalRequest.update(data, {
        where: { id }
    });
};
