
import User from "@/models/User.js"
import connect from "@/utils/db.js"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcryptjs"
 const handler  = NextAuth ({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
    }),
  CredentialsProvider({
    id: "credentials",
    name: "Credentials",
    async authorize(credentials){
      await connect()
      try{
        const user = await User.findOne({email: credentials.email})
        if (user){
          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
          if (isPasswordCorrect){
            return user
          }else {
            throw new Error("wrong password !")
          }
        }else {
          throw new Error("user not found")
        }
      }catch(err){
        throw new Error(err)
      }
    }
  })  
  ],
  pages: {
    error:"/dashboard/login"
  }
})
export {handler as GET, handler as POST}