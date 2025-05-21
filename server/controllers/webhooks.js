import pkg from "svix";
const { Svix, Webhook } = pkg;

import dotenv from "dotenv";
import User from "../models/UserSchema.js";
dotenv.config();

export const clerkhook = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userInfo = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        };
        await User.create(userInfo);
        return res.json({});
      }

      case "user.updated": {
        const userInfo = {
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userInfo);
        return res.json({});
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        return res.json({});
      }

      default:
        return res.status(200).json({ message: "Unhandled event type" });
    }
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(400).json({ error: "Webhook verification failed" });
  }
};
