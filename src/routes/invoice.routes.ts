import { Router } from 'express';
import { createInvoice, fetchAllInvoiceData, getInvoiceById, updateInvoiceById } from '../controllers/invoice.controller';

const router = Router();
router.post('/create', createInvoice);
router.get('/getAll', fetchAllInvoiceData);
router.get('/:id', getInvoiceById);
router.put('/:id', updateInvoiceById);

export default router;
