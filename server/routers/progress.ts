import { Router, Response, Request } from 'express';

const router = Router();

// Get all progress
router.get('/', (req: Request, res: Response) => {
  res.send('Get all progress');
});

// Get a specific progress
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Get progress with ID: ${id}`);
});

// Create a new progress
router.post('/', (req: Request, res: Response) => {
  res.send('Create a new progress');
});

// Update an existing progress
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Update progress with ID: ${id}`);
});

// Delete a progress
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Delete progress with ID: ${id}`);
});

export default router;