import app from "./src/app.js";
import envConfig from "./src/config/env.config.js";



app.listen(envConfig.PORT || 3000, () => {
  console.log(`Server is running on http://localhost:${envConfig.PORT || 3000}`);
});
    