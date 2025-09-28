import { Router } from 'express';
import { createReferenceData, getReferenceDataById, getReferenceDataByCategory} from '../controllers/reference_data.controller';

const router = Router();
router.get('/create', createReferenceData);
router.get('/getById', getReferenceDataById);
router.get('/getByCategory', getReferenceDataByCategory);

export default router;
