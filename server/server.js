import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import Dbcon from "./config/docon.js";
import { clerkhook } from "./controllers/webhooks.js";

dotenv.config();

const app = express();
app.use(cors());


app.use("/clerk", bodyParser.raw({ type: "application/json" }));
app.post("/clerk", clerkhook);

app.use(express.json());


app.get("/", (req, res) => res.send("Server is running"));

await Dbcon();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
