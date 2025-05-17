import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

  const Dbcon = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected successfully");
        
    } catch (error) {
        console.log(`connection faild ${error.message}`);
        
    }
  }
  export default Dbcon;