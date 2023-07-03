import mongoose from "mongoose";
let postModel;

try {
  postModel = mongoose.model("Post");
} catch (err) {
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
  postModel = mongoose.model("Post", postSchema);
}
export default postModel;
