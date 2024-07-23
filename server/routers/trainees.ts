import { Router, Response, Request } from 'express';

const router = Router();

// Get all trainees
router.get('/', (req: Request, res: Response) => {
  res.send('Get all trainees');
});

// Get a specific trainee
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Get trainee with ID: ${id}`);
});

// Create a new trainee
router.post('/', (req: Request, res: Response) => {
  res.send('Create a new trainee');
});

// Update an existing trainee
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Update trainee with ID: ${id}`);
});

// Delete a trainee
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Delete trainee with ID: ${id}`);
});

export default router;