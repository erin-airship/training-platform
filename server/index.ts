import express, { Request, Response } from 'express';
const app = express();
const port = 3000;

app.use(express.json());

app.get('/hello-world', (req: Request, res: Response) => {
  res.json({ hello: 'World' });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the home page!');
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

