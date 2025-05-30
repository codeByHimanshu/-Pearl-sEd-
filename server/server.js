import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import Dbcon from "./config/docon.js";


import userRouter from "./routes/user.route.js";


dotenv.config();

const app = express();
app.use(cors());


app.use(express.json());

app.post("/api/auth", userRouter);


app.get("/", (req, res) => res.send("Server is running"));

await Dbcon();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
