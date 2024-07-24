import { Router, Response, Request } from 'express';
import * as moduleController from '../controllers/modules';

const router = Router();

router.route('/').get(moduleController.getModules);

router.route('/:id').get(moduleController.getModuleById);

router.route('/').post(moduleController.createModule);

router.route('/:id').put(moduleController.updateModule);

router.route('/:id').delete(moduleController.deleteModule);

export default router;