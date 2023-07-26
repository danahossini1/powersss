import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb";
import connectDb from "@/utils/connectDB"
import User from "@/models/Users";
import { compare } from "bcryptjs";


const optionPath = {

    adapter: MongoDBAdapter(clientPromise),

    session: { strategy: "jwt" },


    secret: process.env.JWT_KEY,


    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {

                const { userName, password } = credentials

                if (!userName || !password) {
                    throw new Error('userName or password is not defind')
                }

                try {
                    await connectDb()
                } catch (err) {
                    throw new Error("Error in connected to database")
                }

                const userByName = await User.findOne({ userName })
                const userByEmail = await User.findOne({ email: userName })

                const isUserValid = userByEmail || userByName

                if (!isUserValid) throw new Error("user is not valid")

                const verifyPassword = await compare(password, isUserValid.password)
                if (!verifyPassword) throw new Error("userName or password is not valid")

                console.log(isUserValid);

                return isUserValid

            }
        }),
    ],
}

export default NextAuth(optionPath)