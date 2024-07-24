import { Router, Response, Request } from 'express';
import * as userController from '../controllers/users';

const router = Router();

router.route('/').get(userController.getUsers);

router.route('/:id').get(userController.getUserById);

router.route('/').post(userController.createUser);

router.route('/:id').put(userController.updateUser);

router.route('/:id').delete(userController.deleteUser);

export default router;