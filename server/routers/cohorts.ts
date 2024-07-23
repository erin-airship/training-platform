import { Router, Response, Request } from 'express';

const router = Router();

// Get all cohorts
router.get('/', (req: Request, res: Response) => {
  res.send('Get all cohorts');
});

// Get a specific cohort
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Get cohort with ID: ${id}`);
});

// Create a new cohort
router.post('/', (req: Request, res: Response) => {
  res.send('Create a new cohort');
});

// Update an existing cohort
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Update cohort with ID: ${id}`);
});

// Delete a cohort
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Delete cohort with ID: ${id}`);
});

export default router;