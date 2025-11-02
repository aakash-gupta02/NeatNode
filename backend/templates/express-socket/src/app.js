import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { errorHandler, notFound } from './middleware/error.middleware.js';
import { rateLimiter } from './middleware/rateLimiter.js';


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
    res.status(200).json({ status: "OK", message: "ALL IS WELL😂..." });
});

// default route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// error handling middlewares
app.use(notFound);
app.use(errorHandler);

export default app;
