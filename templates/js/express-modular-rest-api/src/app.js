import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { StatusCodes } from 'http-status-codes';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import { config } from './config/env.config.js';
import { errorHandler, notFound } from './core/middleware/error.middleware.js';
import sendResponse from './core/utils/ApiResponse.js';
import indexRoute from './routes/index.route.js';



// instance 
const app = express();

// middlewares
app.use(cors({
    origin: config.allowedOrigins,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet());

// routes
app.use("/api/v1", indexRoute);


// default route
app.get("/", (req, res) => {
    sendResponse(res, StatusCodes.OK, "API is running...");
});
app.get("/favicon.ico", (req, res) => res.status(StatusCodes.NO_CONTENT).end()); // to prevent favicon requests from showing up in logs




// error handling middlewares
app.use(notFound);
app.use(errorHandler);

export default app;
