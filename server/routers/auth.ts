
import { Router } from 'express';
import * as authControler from '../controllers/auth';

const router = Router();

router.route('/signup').post(authControler.postSignUp);

export default router;