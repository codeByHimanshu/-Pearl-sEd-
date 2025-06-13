import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import Dbcon from "./config/docon.js";
import router from "./routes/user.route.js";
import courserouter from "./routes/course.routes.js";
import lectureRouter from "./routes/lecture.routes.js";



dotenv.config();
await Dbcon();
const app = express();
app.use(cors());


app.use(express.json());

app.use("/api/auth", router);
app.use('api/course',courserouter)
app.use("api/lecture",lectureRouter)


app.get("/", (_req, res) => res.send("Server is running"));



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
