
import { Router } from 'express';
import * as authControler from '../controllers/auth';

const router = Router();

router.route('/signup').post(authControler.postSignUp);
router.route('/signin').post(authControler.postSignIn);

export default router;