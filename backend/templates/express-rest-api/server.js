import app from "./src/app.js";
import { connectDB } from "./src/config/db.config.js";
import { config } from "./src/config/env.config.js";
const PORT = config.port || 3000;

// Connect to the database
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

