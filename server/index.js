import express from 'express';
import { Connection } from './connection.js';

const app = express();

app.listen(3010 ,()=>{
    Connection();
    console.log("server started");   
    
})
