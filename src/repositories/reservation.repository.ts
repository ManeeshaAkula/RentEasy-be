import { Reservation } from '../models/reservation.model';
import { ReservationDTO } from "../dto/reservation.dto";

export const createReservation = async (data: ReservationDTO) => {
    return await Reservation.create(data);
};

export const getReservationById = async (id: string) => {
    return await Reservation.findOne({ where: { id } });
};

export const getAllReservations = async () => {
    return await Reservation.findAll();
};

export const updateReservationById = async (id: string, data: any) => {
    return await Reservation.update(data, {
        where: { id }
    });
};
