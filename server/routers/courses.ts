import { Router, Response, Request } from 'express';
import * as courseController from '../controllers/courses';

const router = Router();

// Get all courses
router.route('/').get(courseController.getCourses);

router.route('/:id').get(courseController.getCourseById);

router.route('/').post(courseController.createCourse);

router.route('/:id').put(courseController.updateCourse);

router.route('/:id').delete(courseController.deleteCourse);

export default router;