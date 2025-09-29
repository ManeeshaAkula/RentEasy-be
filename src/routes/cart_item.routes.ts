import { Router } from 'express';
import { createCartItem, fetchAllCartItemData, getCartItemById, updateCartItemById } from '../controllers/cart_item.controller';

const router = Router();
router.post('/create', createCartItem);
router.get('/getAll', fetchAllCartItemData);
router.get('/:id', getCartItemById);
router.put('/:id', updateCartItemById);

export default router;
