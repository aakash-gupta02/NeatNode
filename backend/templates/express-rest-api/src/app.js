import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/user.route.js'
import { errorHandler, notFound } from './middleware/error.middleware.js';


// instance 
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("API is running...");
});


// error handling middlewares
app.use(notFound);
app.use(errorHandler);

export default app;
