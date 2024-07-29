import { Router, Response, Request } from 'express';
import * as moduleController from '../controllers/modules';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Modules
 *   description: Program components that make up a course
 */

/**
 * @swagger
 * /modules:
 *   get:
 *     summary: Retrieve a list of modules
 *     tags: [Modules]
 *     responses:
 *       200:
 *         description: A list of modules
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Module'
 */
router.route('/').get(moduleController.getModules);

/**
 * @swagger
 * /modules/{id}:
 *   get:
 *     summary: Retrieve a single module by ID
 *     tags: [Modules]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The module ID
 *     responses:
 *       200:
 *         description: A module object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Module'
 *       404:
 *         description: Module not found
 */
router.route('/:id').get(moduleController.getModuleById);

/**
 * @swagger
 * /modules:
 *   post:
 *     summary: Create a new module
 *     tags: [Modules]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Module'
 *     responses:
 *       201:
 *         description: The created module
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Module'
 */
router.route('/').post(moduleController.createModule);

/**
 * @swagger
 * /modules/{id}:
 *   put:
 *     summary: Update a module by ID
 *     tags: [Modules]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The module ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Module'
 *     responses:
 *       200:
 *         description: The updated module
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Module'
 *       404:
 *         description: Module not found
 */
router.route('/:id').put(moduleController.updateModule);

/**
 * @swagger
 * /modules/{id}:
 *   delete:
 *     summary: Delete a module by ID
 *     tags: [Modules]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The module ID
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Module not found
 */
router.route('/:id').delete(moduleController.deleteModule);

export default router;