import mongoose from "mongoose";
let userModel
if (mongoose.models.User){
  userModel = mongoose.models.User
} else {

  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 15,
      trim: true,
      unique: true
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
  const userModel = mongoose.model("User", userSchema)
}
export default userModel
