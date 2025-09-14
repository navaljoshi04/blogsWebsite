import express from 'express';
import cookiParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import authRoute from './routes/userRoute.js';
import connectDB from './config/database.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);

const PORT=process.env.PORT

const startServer = async()=>{
    try{
        await connectDB()
    app.listen(PORT,()=>{
        console.log(`Server is running  at http://localhost:${PORT}`)
    })
    }
    catch(err){
   console.error("Server connection error" + err.message);
    }
}

startServer();