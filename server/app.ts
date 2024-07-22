import express, { Request, Response } from 'express';
import { exampleRouter, usersRouter } from './routers';
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use('/example', exampleRouter);
app.use('/users', usersRouter);

export { app };