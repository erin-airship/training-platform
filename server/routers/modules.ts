import { Router, Response, Request } from 'express';

const router = Router();

// Get all modules
router.get('/', (req: Request, res: Response) => {
  res.send('Get all modules');
});

// Get a specific module
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Get module with ID: ${id}`);
});

// Create a new module
router.post('/', (req: Request, res: Response) => {
  res.send('Create a new module');
});

// Update an existing module
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Update module with ID: ${id}`);
});

// Delete a module
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Delete module with ID: ${id}`);
});

export default router;