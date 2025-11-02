import app from "./src/app.js";
import { connectDB } from "./src/config/db.config.js";
import envConfig from "./src/config/env.config.js";


connectDB();

app.listen(envConfig.PORT || 3000, () => {
  console.log(`Server is running on http://localhost:${envConfig.PORT || 3000}`);
});
    