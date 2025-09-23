import express from "express";
import cookiParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./routes/userRoute.js";
import connectDB from "./config/database.js";
import blogRoute from "./routes/blogRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


app.use("/api/auth", authRoute);
app.use("/api/blog", blogRoute);



const PORT = process.env.PORT;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running  at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Server connection error" + err.message);
  }
};

startServer();
