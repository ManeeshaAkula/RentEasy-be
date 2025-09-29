import { Router } from 'express';
import { createReservation, fetchAllReservationData, getReservationById, updateReservationById } from '../controllers/reservation.controller';

const router = Router();
router.post('/create', createReservation);
router.get('/getAll', fetchAllReservationData);
router.get('/:id', getReservationById);
router.put('/:id', updateReservationById);

export default router;
