import { Router, Response, Request } from 'express';
import * as courseController from '../controllers/courses';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: A structured program led by a trainer consisting of various modules, lessons, or assignments
 */

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Retrieve a list of courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: A list of courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 */
router.route('/').get(courseController.getCourses);

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Retrieve a single course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The course ID
 *     responses:
 *       200:
 *         description: A course object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       404:
 *         description: Course not found
 */
router.route('/:id').get(courseController.getCourseById);

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a new course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       201:
 *         description: The created course
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 */
router.route('/').post(courseController.createCourse);

/**
 * @swagger
 * /courses/{id}:
 *   put:
 *     summary: Update a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The course ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: The updated course
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       404:
 *         description: Course not found
 */
router.route('/:id').put(courseController.updateCourse);

/**
 * @swagger
 * /courses/{id}:
 *   delete:
 *     summary: Delete a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The course ID
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Course not found
 */
router.route('/:id').delete(courseController.deleteCourse);

export default router;