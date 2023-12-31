import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';

const   router = Router ();

router.post('/register');
router.post('/login');

export default router;