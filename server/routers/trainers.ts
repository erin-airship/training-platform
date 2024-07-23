import { Router, Response, Request } from 'express';

const router = Router();

// Get all trainers
router.get('/', (req: Request, res: Response) => {
  res.send('Get all trainers');
});

// Get a specific trainer
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Get trainer with ID: ${id}`);
});

// Create a new trainer
router.post('/', (req: Request, res: Response) => {
  res.send('Create a new trainer');
});

// Update an existing trainer
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Update trainer with ID: ${id}`);
});

// Delete a trainer
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Delete trainer with ID: ${id}`);
});

export default router;