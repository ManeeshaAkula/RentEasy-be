import { Router } from 'express';
import { createProduct, fetchAllProductData, getProductById, updateProductById } from '../controllers/product.controller';

const router = Router();
router.post('/create', createProduct);
router.get('/getAll', fetchAllProductData);
router.get('/:id', getProductById);
router.put('/:id', updateProductById);

export default router;
