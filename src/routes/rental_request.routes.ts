import { Router } from 'express';
import { createRentalRequest, fetchAllRentalRequestData, getRentalRequestById, updateRentalRequestById } from '../controllers/rental_request.controller';

const router = Router();
router.post('/create', createRentalRequest);
router.get('/getAll', fetchAllRentalRequestData);
router.get('/:id', getRentalRequestById);
router.put('/:id', updateRentalRequestById);

export default router;
