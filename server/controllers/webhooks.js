import pkg from "svix";
const { Webhook } = pkg;

import dotenv from "dotenv";
import User from "../models/UserSchema.js";
dotenv.config();

export const clerkhook = async (req, res) => {
  try {
    console.log("🔔 Incoming webhook from Clerk");

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const payload = req.body;
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    console.log("📦 Raw payload received:", payload.toString());
    console.log("🧾 Headers received:", headers);

    const evt = whook.verify(payload, headers);
    console.log("✅ Webhook verified");

    const { data, type } = evt;
    console.log("📨 Webhook event type:", type);
    console.log("🧠 Webhook event data:", JSON.stringify(data, null, 2));

    switch (type) {
      case "user.created": {
        const userInfo = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        };
        await User.create(userInfo);
        console.log("✅ User created in DB:", userInfo);
        return res.status(200).json({});
      }

      case "user.updated": {
        const userInfo = {
          email: data.email_addresses[0].email_address,
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userInfo);
        console.log("📝 User updated in DB:", userInfo);
        return res.status(200).json({});
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        console.log("🗑️ User deleted from DB:", data.id);
        return res.status(200).json({});
      }

      default:
        console.warn("⚠️ Unhandled event type:", type);
        return res.status(200).json({ message: "Unhandled event type" });
    }
  } catch (error) {
    console.error("❌ Webhook error occurred:", error);
    return res.status(400).json({ error: "Webhook verification failed" });
  }
};
