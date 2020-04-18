import { Router } from 'express';
import { signIn } from '../controllers/admin';

const router = Router(); // routes 

router
    .post('/admin', signIn)

export default router;