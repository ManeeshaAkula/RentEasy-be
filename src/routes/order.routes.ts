import { Router } from 'express';
import { createOrder, fetchAllOrderData, getOrderById, updateOrderById } from '../controllers/order.controller';

const router = Router();
router.post('/create', createOrder);
router.get('/getAll', fetchAllOrderData);
router.get('/:id', getOrderById);
router.put('/:id', updateOrderById);

export default router;
