import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { errorHandler, notFound } from './middleware/error.middleware.js';
// ROUTE_IMPORTS_START
import authRoutes from './routes/user.route.js'
// ROUTE_IMPORTS_END

// instance 
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// routes

// ROUTE_USES_START
app.use("/api/auth", authRoutes);
// ROUTE_USES_END


// default route
app.get("/", (req, res) => {
    res.send("API is running...");
});


// error handling middlewares
app.use(notFound);
app.use(errorHandler);

export default app;
