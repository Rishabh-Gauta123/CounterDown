import express from 'express'
import dotenv from 'dotenv';
import connectDb from './config/connectDb.js';
import cors from 'cors'
import timeRouter from './routes/timeRouter.js'


dotenv.config();
const app=express();

app.use(express.json());
app.use(cors());
connectDb();


app.use("/api/timer", timeRouter);

app.get("/test",(req,res)=>{
    return res.status(201).send("serve is runing fine.")
})


const PORT=process.env.PORT || 8080;

app.listen(PORT,(res,re)=>{
    console.log("app is runing on the port 8080");
})