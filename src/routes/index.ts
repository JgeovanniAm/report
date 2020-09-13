import { Router } from 'express';
import { signIn } from '../controllers/admin';
import { JWT } from '../controllers/report';
const router = Router(); // routes 

router
    .post('/admin', signIn)
    .get('/access', JWT, (req, res) => {
        res.json({
            success: true,
        })
    })

export default router;