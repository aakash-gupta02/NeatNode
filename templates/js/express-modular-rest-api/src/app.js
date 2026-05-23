import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { StatusCodes } from 'http-status-codes';
import helmet from 'helmet';

import { errorHandler, notFound } from './middleware/error.middleware.js';
import { config } from './config/env.config.js';
import { rateLimiter } from './middleware/rateLimiter.js';
import sendResponse from './utils/ApiResponse.js';

// ROUTE_IMPORTS_START
import authRoutes from './routes/user.route.js'
// ROUTE_IMPORTS_END



// instance 
const app = express();

// middlewares
app.use(cors({
    origin: config.allowedOrigins,
    // { credentials: true } // uncomment this if you need to work with cookies
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

// routes

// ROUTE_USES_START
app.use("/api/auth", authRoutes);
// ROUTE_USES_END


// default route
app.get("/", (req, res) => {
    sendResponse(res, StatusCodes.OK, "API is running...");
});
app.get("/favicon.ico", (req, res) => res.status(204).end());


// health check route with rate limiting
app.get("/health", rateLimiter(20), (req, res) => {
    sendResponse(res, StatusCodes.OK, "ALL IS WELL😂...");
});


// error handling middlewares
app.use(notFound);
app.use(errorHandler);

export default app;
