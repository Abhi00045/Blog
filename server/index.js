import express from 'express';
import { Connection } from './connection.js';
import postRouter from './routes/post.route.js';

const app = express();

app.use("/post",postRouter)

app.listen(3010 ,()=>{
    Connection();
    console.log("server started");   
})

