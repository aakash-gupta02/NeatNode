import dotenv from 'dotenv';

dotenv.config();

const envConfig = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI,
  CLIENT_URL: process.env.CLIENT_URL,
};

export default envConfig;
