
import User from "@/models/Users";
import connectDb from "@/utils/connectDB"
import { hash } from "bcryptjs"

export default async function handler(req, res) {

    if (req.method !== "POST") return;


    try {
        await connectDb()
    } catch (err) {
        console.log("Error in connected to database")
    }



    const { fullName, userName, email, password } = req.body

    const userValid = await User.findOne({ userName })
    if (userValid) {
        res.status(400).json({ message: "User Repetitious" })
        return;
    }

    const emailValid = await User.findOne({ email })
    if (emailValid) {
        res.status(400).json({ message: "Email Repetitious" })
        return;
    }

    const hashedPassword = await hash(password, 12)

    try {
        const user = await User.create({
            fullName,
            userName,
            email,
            password: hashedPassword,
        })
        res.status(201).json(user)

    } catch (err) {
        res.status(400).json({ status: "Error", message: "data is not valid" })
    }

}