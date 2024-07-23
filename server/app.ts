import express, { Request, Response } from 'express';
import { 
    coursesRouter, 
    exampleRouter,
    progressRouter,
    usersRouter
} from './routers';
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
app.use('/courses', coursesRouter);
app.use('/example', exampleRouter);
app.use('/progress', progressRouter);
app.use('/users', usersRouter);

export { app };