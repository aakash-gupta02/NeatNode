import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { errorHandler, notFound } from './middleware/error.middleware.js';
import { rateLimiter } from './middleware/rateLimiter.js';
import sendResponse from './utils/ApiResponse.js';
import { StatusCodes } from 'http-status-codes';


// instance 
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

// health check route with rate limiting
app.get("/health", rateLimiter(20), (req, res) => {
    sendResponse(res, StatusCodes.OK, "API is running...");
});

// default route
app.get("/", (req, res) => {
    sendResponse(res, StatusCodes.OK, "API is running...");
});

// To avoid unnecessary favicon errors
app.get("/favicon.ico", (req, res) => res.status(204).end());


// error handling middlewares
app.use(notFound);
app.use(errorHandler);

export default app;
