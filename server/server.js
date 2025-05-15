import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("server is ruunig"));


const port =  process.env.port || 3000

app.listen(port,()=>{
    console.log(`server is ruunig on port ${port}`);
    
})
