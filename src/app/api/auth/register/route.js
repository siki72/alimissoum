import connect from "@/utils/db.js"
import { NextResponse } from "next/server.js"
import bcrypt from "bcryptjs"
import User from "@/models/User.js"
export const POST = async (request) =>{
    const { name, email, password} = await request.json() 
    await connect()

    const hashedPassword = await bcrypt.hash(password, 5)
    const newUser = new User(
        {
            name,
            email,
            password: hashedPassword
        }
    )
    try{
        const resp = await newUser.save()
        const userInfos = {
            name: resp.name,
            email: resp.email
        }
        return new NextResponse( JSON.stringify(userInfos), {status: 201})
        
    }catch(err){
        return new NextResponse(err.message, {status: 500})
    }
}