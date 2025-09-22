import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("ERROR" + err.message);
  }
};

export default connectDB;
