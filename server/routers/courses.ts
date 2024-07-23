import { Router, Response, Request } from 'express';

const router = Router();

// Get all courses
router.get('/', (req: Request, res: Response) => {
  res.send('Get all courses');
});

// Get a specific course
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Get course with ID: ${id}`);
});

// Create a new course
router.post('/', (req: Request, res: Response) => {
  res.send('Create a new course');
});

// Update an existing course
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Update course with ID: ${id}`);
});

// Delete a course
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Delete course with ID: ${id}`);
});

export default router;