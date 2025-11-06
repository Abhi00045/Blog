import express from 'express'; 
import { Connection } from './connection.js';
import postRouter from './routes/post.route.js';
import clerkRouter from './routes/webhook.route.js'
import 'dotenv/config'
import cors from 'cors'


const app = express();

app.use(cors(
    {
        origin:[
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:3000",
        ],
        credentials:true,
        methods:["GET","POST","UPDATE","DELETE"],
        allowedHeaders:["content-type","Authorization"]
    }
))

app.use(express.urlencoded({extended:true}));
// console.log(process.env.CLERK_SECERT);

// console.log("hii")
// console.log(clerkRouter)
app.use(express.json())
app.use("/clerk",clerkRouter);

app.use("/posts",postRouter);
// app.use("/clerk",clerkRouter)

//-----------------------------------------------Error Handling---------

// app.use((error, req,res,next)=>{
// res.status(error.status)
//     res.json({
//         message : error.message || "something went wrong",
//         status : error.status
//     })
// })

//---------- Error Handling ---------------------------------------------------

app.listen(3010 ,()=>{
    Connection();
    console.log("server started");   
})

