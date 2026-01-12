import app from "./app.js"; 
import dotenv from 'dotenv';
import connectDB from "./config/database.js";

// Load environment variables
dotenv.config({quiet: true});
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
