import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 200,
        unique: true,
        trim: true
      },
      password: { type: String, required: true, minlength: 3, maxlength: 1024 },
    
      
}, {timestamps: true});

export default userModel = mongoose.model("User", userSchema)
