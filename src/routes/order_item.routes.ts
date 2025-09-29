import { Router } from 'express';
import { createOrderItem, fetchAllOrderItemData, getOrderItemById, updateOrderItemById } from '../controllers/order_item.controller';

const router = Router();
router.post('/create', createOrderItem);
router.get('/getAll', fetchAllOrderItemData);
router.get('/:id', getOrderItemById);
router.put('/:id', updateOrderItemById);

export default router;
