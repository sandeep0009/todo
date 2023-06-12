import express from "express";
import dotenv from "dotenv";
import ConnectDb from "./config/db.js";
import authroutes from "./routes/authroutes.js";


dotenv.config();
const app=express();
ConnectDb();

const PORT=process.env.PORT || 3001;
app.use(express.json());

app.use('/api/v1/auth',authroutes);

app.listen(PORT,()=>{
    console.log(`server is running ${process.env.DEV_MOD}`);
})