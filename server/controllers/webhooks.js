import {Svix, webhook} from 'svix';
import User from './models/UserSchema.js'
import dotenv from 'dotenv'
dotenv.config()

export const clerkhook = async (req,res) => {
    try {
        const whook = new webhook(process.env.CELRK_WEBHOOK_SECRET)

    await whook.verify(JSON.stringify(req.body),{
        "svix-id":req.headers["svix-id"],
        "svix-timestamp":req.headers["svix-timestamp"],
        "svix-signature":req.headers["svix-signature"]
    })

const {data,type} = req.body
    } catch (error) {
        
    }
}
 