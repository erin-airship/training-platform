import express, { Request, Response } from 'express';
import { 
    coursesRouter, 
    exampleRouter,
    modulesRouter,
    progressRouter,
    usersRouter
} from './routers';
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
app.use('/courses', coursesRouter);
app.use('/example', exampleRouter);
app.use('/modules', modulesRouter);
app.use('/progress', progressRouter);
app.use('/users', usersRouter);

export { app };