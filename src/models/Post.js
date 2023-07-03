import mongoose from "mongoose";

let postModel

if (mongoose.models.Post){
  postModel = mongoose.models.Post
} else {

  const postSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
    );
    const postModel = mongoose.model("Post", postSchema)
    
  }
  
export default postModel;
