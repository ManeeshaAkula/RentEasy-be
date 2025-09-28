import { Router } from 'express';
import userRoutes from './user.routes';
import ReferenceDataRoutes from './user.routes';

const router = Router();
router.use('/user', userRoutes);
router.use('/reference-data', ReferenceDataRoutes);

export default router;
