import dotenv from "dotenv";
dotenv.config(); // This MUST run before accessing process.env

import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connection to MongoDB: ', error.message);
    process.exit(1);
  }
};
