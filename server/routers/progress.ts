import { Router, Response, Request } from 'express';
import * as progressController from '../controllers/progress';

const router = Router();

router.route('/').get(progressController.getProgress);

router.route('/:id').get(progressController.getProgressById);

router.route('/').post(progressController.createProgress);

router.route('/:id').put(progressController.updateProgress);

router.route('/:id').delete(progressController.deleteProgress);

export default router;