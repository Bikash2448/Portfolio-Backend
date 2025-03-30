import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required: [true, "Full Name is required"],
        minlength: [3, "Full Name must be at least 3 characters"],
        maxlength: [50, "Full Name cannot exceed 50 characters"],
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "Please enter a valid email address",
        ],
    },
    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      unique: true,
      match: [
        /^[0-9]{10}$/,
        "Mobile number must be 10 digits",
      ],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [10, "Message must be at least 10 characters"],
      maxlength: [500, "Message cannot exceed 500 characters"],
    },

})

export const User = mongoose.model("User",userSchema)