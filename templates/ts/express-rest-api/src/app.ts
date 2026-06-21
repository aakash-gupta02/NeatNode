import cors from "cors";
import express, { type Request, type Response } from "express";
import helmet from "helmet";
import { StatusCodes } from "http-status-codes";


import { env } from "./core/config/env.js";
import { errorMiddleware } from "./core/middlewares/error.middleware.js";
import { notFoundMiddleware } from "./core/middlewares/notFound.middleware.js";
import { globalRateLimiter } from "./core/middlewares/rateLimiter.middleware.js";
import { requestLogger } from "./core/middlewares/requestLogger.js";

import apiRoutes from "./routes/index.route.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(globalRateLimiter);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

app.get("/", (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: "NeatNode TS REST API is running",
    env: env.NODE_ENV,
  });
});

app.use("/api/v1", apiRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
