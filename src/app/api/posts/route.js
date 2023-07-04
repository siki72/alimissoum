import postModel from "@/models/Post.js"
import connect from "@/utils/db.js"
import { NextResponse } from "next/server.js"


export const GET = async (request) =>{
    // pour recuperer `/api/posts?username=${session?.user?.name}`
    const url = new URL(request.url)
    const username =  url.searchParams.get("username")
    try{
        await connect()
        const posts = await postModel.find(username && {username})
        if (posts.length){
            return new NextResponse (JSON.stringify(posts), {status: 200})
        }else {
            return new NextResponse ("not found", {status: 201})

        }
    }catch (err){
        return new NextResponse ("database Error", {status: 500})
    }
}

export const POST = async (request) =>{
    // pour recuperer body
    const body = await request.json()
    console.log("called")
    console.log(body)
    const newPost = new postModel(body)
    try{
        await connect()
        await newPost.save()
        return new NextResponse ("post has been creeted", {status: 201})

    }catch (err){
        return new NextResponse ("database Error from post", {status: 500})
    }
}