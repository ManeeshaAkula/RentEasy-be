import { Router } from 'express';
import { createReferenceData, getReferenceDataById, getReferenceDataByCategory} from '../controllers/reference_data.controller';

const router = Router();
router.post('/create', createReferenceData);
router.get('/:id', getReferenceDataById);
router.get('/getByCategory', getReferenceDataByCategory);

export default router;
