import { Router, Response, Request } from 'express';

const router = Router();

// Get all users
router.get('/', (req: Request, res: Response) => {
  res.send('Get all users');
});

// Get a specific user
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Get user with ID: ${id}`);
});

// Create a new user
router.post('/', (req: Request, res: Response) => {
  res.send('Create a new user');
});

// Update an existing user
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Update user with ID: ${id}`);
});

// Delete a user
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Delete user with ID: ${id}`);
});

export default router;