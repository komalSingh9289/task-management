import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const DB_URI = process.env.MONGO_URI;

const connection = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database Connected");
  } catch (err) {
    console.error(`Failed to connect with database: ${err.message}`);
  }
};

export default connection;
