import postModel from "@/models/Post.js"
import connect from "@/utils/db.js"
import { NextResponse } from "next/server.js"

export const GET = async (request) =>{
    try{
        await connect()
        const posts = await postModel.find()
        console.log(posts)
        if (posts.length){
            return new NextResponse (posts, {status: 200})
        }else {
            return new NextResponse ("not found", {status: 201})

        }
    }catch (err){
        console.log(process.env.MONGO_URL)
        return new NextResponse ("database Error", {status: 500})
    }
}