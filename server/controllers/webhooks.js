import pkg from "svix";
const { Webhook } = pkg;

import dotenv from "dotenv";
import User from "../models/UserSchema.js";
dotenv.config();

export const clerkhook = async (req, res) => {
  try {
    console.log("callessssss")
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const payload = req.body; 
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const evt = whook.verify(payload, headers);

    const { data, type } = evt;
    console.log("data = ",data);
    switch (type) {
      case "user.created": {
        const userInfo = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        };
        await User.create(userInfo);
        console.log(" User created:", userInfo);
        return res.status(200).json({});
      }

      case "user.updated": {
        const userInfo = {
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        };
        await User.findOneAndUpdate({ clerkId: data.id }, userInfo);
        console.log(" User updated:", userInfo);
        return res.status(200).json({});
      }

      case "user.deleted": {
        await User.findOneAndDelete({ clerkId: data.id });
        console.log(" User deleted:", data.id);
        return res.status(200).json({});
      }

      default:
        console.warn(" Unhandled event type:", type);
        return res.status(200).json({ message: "Unhandled event type" });
    }
  } catch (error) {
    console.error(" Webhook verification failed:", error.message);
    return res.status(400).json({ error: "Webhook verification failed" });
  }
};
