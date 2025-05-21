import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Dbcon from './config/docon.js'
import { clerkhook } from "./controllers/webhooks.js";

const app = express();

app.use(cors());

await Dbcon()

app.get("/", (req, res) => res.send("server is ruunig"));

app.post('/clerk',express.json(),clerkhook)


const port =  process.env.port || 3000

app.listen(port,()=>{
    console.log(`server is ruunig on port ${port}`);
    
})
