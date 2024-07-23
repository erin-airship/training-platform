import express, { Request, Response } from 'express';
import { 
    cohortsRouter, 
    coursesRouter, 
    exampleRouter, 
    modulesRouter, 
    progressRouter,
    traineesRoutes, 
    trainersRoutes, 
    usersRouter
} from './routers';
const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
app.use('/cohorts', cohortsRouter);
app.use('/courses', coursesRouter);
app.use('/example', exampleRouter);
app.use('/modules', modulesRouter);
app.use('/progress', progressRouter);
app.use('/trainees', traineesRoutes);
app.use('/trainers', trainersRoutes);
app.use('/users', usersRouter);

export { app };