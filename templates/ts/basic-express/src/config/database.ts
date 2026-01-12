import mongoose from "mongoose"

const connectDB = async (): Promise<void> => {
    try {
        const MONGO_URI = process.env.MONGO_URI;

        if (!MONGO_URI) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }
        await mongoose.connect(MONGO_URI)
        console.info('✅ MongoDB connected successfully');
        
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    }
}

export default connectDB;