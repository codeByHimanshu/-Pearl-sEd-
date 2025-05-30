import mongoose from "mongoose";

const userSignUp = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your first name"],
      trim: true,
    },
   
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
     
    },
    role: {
      type: String,
      required: true,
      enum: ['student', 'mentor'] 
    },
   
  }
);

const SignUp = mongoose.model("SignUp", userSignUp);

export default SignUp;
