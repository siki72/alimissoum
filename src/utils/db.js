import mongoose from "mongoose";
const connect = async()=>{
    try{
        console.log("connection routes called")
        await mongoose.connect(process.env.MONGO_URL)
    }catch (error){
        throw new Error ("connection failed !")
    }
}

export default connect