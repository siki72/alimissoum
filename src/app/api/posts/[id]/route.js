import postModel from "@/models/Post.js"
import connect from "@/utils/db.js"
import { NextResponse } from "next/server.js"


export const GET = async (request, {params}) =>{

    const {id} = params
    try{
        await connect()
        const post = await postModel.findById(id)
        return new NextResponse(JSON.stringify(post), {status:200})
    }catch(err){
        return new NextResponse("database error", {status:500})
    }
}
export const DELETE = async (request, { params }) => {
    const { id } = params;
  
    try {
      await connect();
  
      await postModel.findByIdAndDelete(id);
  
      return new NextResponse("Post has been deleted", { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };