import "dotenv/config";
import { Webhook } from "svix";
// import { Message } from "svix/dist/api/message";

export const clerkController = (req , res)=>{
    
    const WEBHOOK_SECRET = process.env.CLERK_SECERT;

    if(!WEBHOOK_SECRET){
        throw new Error("webhook secert needed");
    }
// console.log(payload , headers)
console.log(req.body)
    const payload = req.body;
    const headers = req.headers;
    // console.log(payload , headers)

    const wh = new Webhook(WEBHOOK_SECRET);
    let eve;
    try {
        eve = wh.verify(payload, headers);
    } catch (err) {
        res.status(400).json({
            message:"Webhook verification failed"
        });
    }
    res.json(eve)
    console.log("is this  working")
    // console.log(eve)
    

    // if(eve.type === "user.created" ){
    //     // const newUser = new User({
    //     //     clerkId : eve.data.id,
    //     //     username:eve.daya.username,
    //     //     email:eve.data.email
    //     // });
    //     console.log(eve);
        
    // }
    
}