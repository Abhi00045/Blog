import "dotenv/config";
import { Webhook } from "svix";
// import { Message } from "svix/dist/api/message";

export const clerkController = (req , res)=>{
    
    const WEBHOOK_SECRET = process.env.CLERK_SECERT;

    if(!WEBHOOK_SECRET){
        throw new Error("webhook secert needed");
    }

    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOK_SECRET);
    let eve;
    try {
        eve = wh.verify(payload, headers);
    } catch (err) {
        res.status(400).json({
            message:"Webhook verification failed"
        });
    }
    res.json(eve.data)
    

    if(eve.type === "user.created" ){
        const newUser = new User({
            clerkId : eve.data.id,
        })
    }
    
}