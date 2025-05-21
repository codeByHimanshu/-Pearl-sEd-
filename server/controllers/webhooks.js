import { Svix, webhook } from "svix";
import User from "./models/UserSchema.js";
import dotenv from "dotenv";
dotenv.config();

export const clerkhook = async (req, res) => {
  try {
    const whook = new webhook(process.env.CELRK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created":
        {
          userInfo = {
            _id: data.id,
            email: data.email_address[0].email_address,
            name: data.first_name + " " + data.last_name,
            imageUrl: data.image_url,
          };
          await User.create(userInfo)
          res.json({})
          break;
        }

       case "user.updated" :{
        const userInfo = {
                email: data.email_address[0].email_address,
            name: data.first_name + " " + data.last_name,
            imageUrl: data.image_url,
        }
        await User.findByIdAndUpdate(data.id,userInfo)
           res.json({})
          break;
       }
       case "user.deleted":{
        await User.findByIdAndDelete(data.id)
       }
      default:
         res.status(200).json({ message: "Unhandled event type" });
    }
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(400).json({ error: "Webhook verification failed" });
  }
};
