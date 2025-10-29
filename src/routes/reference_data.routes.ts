import { Router } from 'express';
import { createReferenceData, getReferenceDataById, getReferenceDataByCategory, getReferenceDataByCode} from '../controllers/reference_data.controller';

const router = Router();
router.post('/create', createReferenceData);
router.get('/:id', getReferenceDataById);
router.get('/getByCategory/:category', getReferenceDataByCategory);
router.get('/getByCode/:code', getReferenceDataByCode);

export default router;
