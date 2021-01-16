import { Router } from 'express';
import { signIn } from '../controllers/admin';
import { JWT } from '../controllers/report';
import UtilClass from '../util/utils';
const router = Router(); // routes 

router
    .post('/admin', signIn)
    .get('/access', JWT, function (req, res) {
        res.json({
            success: true,
        })
    })

export default router;