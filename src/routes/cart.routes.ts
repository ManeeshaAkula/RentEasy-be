import { Router } from 'express';
import { createCart, fetchAllCartData, getCartById, updateCartById } from '../controllers/cart.controller';

const router = Router();
router.post('/create', createCart);
router.get('/getAll', fetchAllCartData);
router.get('/:id', getCartById);
router.put('/:id', updateCartById);

export default router;
