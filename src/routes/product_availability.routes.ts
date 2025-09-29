import { Router } from 'express';
import { createProductAvailability, fetchAllProductAvailabilityData, getProductAvailabilityById, updateProductAvailabilityById } from '../controllers/product_availability.controller';

const router = Router();
router.post('/create', createProductAvailability);
router.get('/getAll', fetchAllProductAvailabilityData);
router.get('/:id', getProductAvailabilityById);
router.put('/:id', updateProductAvailabilityById);

export default router;
