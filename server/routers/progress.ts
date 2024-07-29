import { Router, Response, Request } from 'express';
import * as progressController from '../controllers/progress';

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Progress
 *   description: Progress tracking for trainees in a course
 */

/**
 * @swagger
 * /progress:
 *   get:
 *     summary: Retrieve a list of progress records
 *     tags: [Progress]
 *     responses:
 *       200:
 *         description: A list of progress records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Progress'
 */
router.route('/').get(progressController.getProgress);

/**
 * @swagger
 * /progress/{id}:
 *   get:
 *     summary: Retrieve a single progress record by ID
 *     tags: [Progress]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The progress record ID
 *     responses:
 *       200:
 *         description: A progress record object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Progress'
 *       404:
 *         description: Progress record not found
 */
router.route('/:id').get(progressController.getProgressById);

/**
 * @swagger
 * /progress:
 *   post:
 *     summary: Create a new progress record
 *     tags: [Progress]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Progress'
 *     responses:
 *       201:
 *         description: The created progress record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Progress'
 */
router.route('/').post(progressController.createProgress);

/**
 * @swagger
 * /progress/{id}:
 *   put:
 *     summary: Update a progress record by ID
 *     tags: [Progress]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The progress record ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Progress'
 *     responses:
 *       200:
 *         description: The updated progress record
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Progress'
 *       404:
 *         description: Progress record not found
 */
router.route('/:id').put(progressController.updateProgress);

/**
 * @swagger
 * /progress/{id}:
 *   delete:
 *     summary: Delete a progress record by ID
 *     tags: [Progress]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The progress record ID
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Progress record not found
 */
router.route('/:id').delete(progressController.deleteProgress);

export default router;