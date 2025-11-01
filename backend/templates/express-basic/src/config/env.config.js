import dotenv from 'dotenv';

dotenv.config();

 const envConfig = {
  PORT: process.env.PORT || 3000,
};

export default envConfig;
