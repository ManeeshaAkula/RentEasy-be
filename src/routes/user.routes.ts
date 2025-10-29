import { Router } from 'express';
import { createUser, loginUser, fetchAllUserData, getUserById, updateUserById } from '../controllers/user.controller';

const router = Router();
router.post('/create', createUser);
router.post('/login', loginUser);
router.get('/getAll', fetchAllUserData);
router.get('/:id', getUserById);
router.put('/:id', fetchAllUserData);

export default router;
