import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// ROUTE_IMPORTS_START
import authRoutes from './routes/user.route.js'
// ROUTE_IMPORTS_END

import { errorHandler, notFound } from './middleware/error.middleware.js';
import { config } from './config/env.config.js';
import helmet from 'helmet';
import { rateLimiter } from './middleware/rateLimiter.js';




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
    res.status(200).json({ message: "API is running..." });
});

// health check route with rate limiting
app.get("/health", rateLimiter(20), (req, res) => {
    res.status(200).json({ status: "OK", message: "ALL IS WELL😂..." });
});


// error handling middlewares
app.use(notFound);
app.use(errorHandler);

export default app;
