
import { Router } from 'express';
import * as authControler from '../controllers/auth';
import { body } from 'express-validator';
import { validate } from '../utils/validator';

const router = Router();

router.route('/signup').post(authControler.postSignUp);

export default router;