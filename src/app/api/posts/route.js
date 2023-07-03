import postModel from "@/models/Post.js"
import connect from "@/utils/db.js"
import { NextResponse } from "next/server.js"

connect()
export const GET = async (request) =>{
    try{
        const posts = await postModel.find()
        if (posts.length){
            return new NextResponse (JSON.stringify(posts), {status: 200})
        }else {
            return new NextResponse ("not found", {status: 201})

        }
    }catch (err){
        console.log(process.env.MONGO_URL)
        return new NextResponse ("database Error", {status: 500})
    }
}