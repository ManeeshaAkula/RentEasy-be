import { ReservationDTO } from '../dto/reservation.dto';
import * as ReservationRepo from '../repositories/reservation.repository';
import { successResponse, errorResponse, ApiResponse } from '../utils/responseBuilder';
import { Reservation } from '../models/reservation.model';

export const createReservation = async (dto: ReservationDTO): Promise<ApiResponse<Reservation>> => {
    try {
        const response = await ReservationRepo.createReservation(dto);
        return successResponse(response, 'Reservation Data added successfully', 200);
    } catch (error) {
        return errorResponse('Failed to add Reservation Data', 500)
    }
};

export const getAllReservationData = async (): Promise<ApiResponse<Reservation[]>> => {
    try {
        const allReservationData = await ReservationRepo.getAllReservations();
        return successResponse(allReservationData, 'Reservations data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch All Reservations data', 500)

    }
};

export const getReservationById = async (id: string): Promise<ApiResponse<Reservation | null>> => {
    try {
        const ReservationData = await ReservationRepo.getReservationById(id);
        return successResponse(ReservationData, 'Reservation data fetched successfully', 200);
    } catch (error) {
        return errorResponse('Failed to fetch Reservation data', 500)

    }
};

export const updateReservationById = async (id: string, data: any): Promise<ApiResponse<{ affectedCount: number }>> => {
    try {
        const result = await ReservationRepo.updateReservationById(id, data);
        const affectedCount = Array.isArray(result) ? result[0] : result;
        return successResponse({ affectedCount }, 'Reservation updated successfully', 200);
    } catch (error) {
        return errorResponse('Failed to update Reservation', 500)
    }
};
