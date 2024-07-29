import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { coursesRouter, exampleRouter, modulesRouter, progressRouter, usersRouter } from "./routers";
import { authMiddlewareExample } from "./middleware/auth";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/courses", coursesRouter);
app.use("/example", exampleRouter);
app.use("/modules", modulesRouter);
app.use("/progress", progressRouter);
app.use("/users", usersRouter);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Training Platform",
      version: "1.0.0",
      description: "Express API",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        User: {
          type: "object",
          required: ["email", "password", "role"],
          properties: {
            id: {
              type: "string",
              description: "The auto-generated id of the user",
            },
            email: {
              type: "string",
              description: "Email of the user. Used for login.",
            },
            password: {
              type: "string",
              description: "Password of the user.",
            },
            role: {
              type: "string",
              description: "Role of the user, either trainer or trainee.",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Creation timestamp",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Update timestamp",
            },
          },
        },
        Course: {
          type: "object",
          required: ["title", "description", "trainerID"],
          properties: {
            id: {
              type: "string",
              description: "The auto-generated id of the course",
            },
            title: {
              type: "string",
              description: "Title of the course.",
            },
            description: {
              type: "string",
              description: "Description of the course.",
            },
            trainerID: {
              type: "string",
              description: "ID of the trainer for the course",
            },
            traineeIDs: {
              type: "array",
              items: {
                type: "string",
              },
              description: "IDs of the trainees enrolled in the course",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Creation timestamp",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Update timestamp",
            },
          },
        },
        Module: {
          type: "object",
          required: ["title", "courseID"],
          properties: {
            id: {
              type: "string",
              description: "The auto-generated id of the module",
            },
            title: {
              type: "string",
              description: "Title of the module",
            },
            courseID: {
              type: "string",
              description: "ID of the course this module belongs to",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Creation timestamp",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Update timestamp",
            },
          },
        },
        Progress: {
          type: "object",
          required: ["traineeID", "courseID", "moduleID", "status"],
          properties: {
            id: {
              type: "string",
              description: "The auto-generated id of the progress record",
            },
            traineeID: {
              type: "string",
              description: "ID of the trainee",
            },
            courseID: {
              type: "string",
              description: "ID of the course",
            },
            moduleID: {
              type: "string",
              description: "ID of the module",
            },
            status: {
              type: "string",
              description: "Status of the progress",
            },
            createdAt: {
              type: "string",
              format: "date-time",
              description: "Creation timestamp",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
              description: "Update timestamp",
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routers/**/*.ts"],
};

  const openapiSpecification = swaggerJsdoc(options);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

  app.use(authMiddlewareExample);

  export { app };
