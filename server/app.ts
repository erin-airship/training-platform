import express from 'express';
import { 
    coursesRouter, 
    exampleRouter,
    modulesRouter,
    progressRouter,
    usersRouter
} from './routers';
import { authMiddlewareExample } from './middleware/auth';
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: '*',
  })
);

app.use('/courses', coursesRouter);
app.use('/example', exampleRouter);
app.use('/modules', modulesRouter);
app.use('/progress', progressRouter);
app.use('/users', usersRouter);


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Training Platform',
      version: '1.0.0',
      description: 'Express API',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          in: 'header',
          name: 'Authorization',
          description: 'Bearer token to access api endpoints',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routers/**.ts', `${__dirname}/routers/*.ts`],
};

const openapiSpecification = swaggerJsdoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use(authMiddlewareExample);


export { app };