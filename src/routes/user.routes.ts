import { Router } from 'express';
import { fetchAllUserData} from '../controllers/user.controller';

const router = Router();
router.get('/getAll', fetchAllUserData);


export default router;
