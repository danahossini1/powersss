import User from "@/models/Users";
import connectDb from "@/utils/connectDB"

export default async function handler(req, res) {

    if (req.method !== 'POST') return;

    try {
        await connectDb()
    } catch (err) {
        throw new Error("Error in connected to database")
    }
    const { email } = req.body

    const user = await User.findOne({ email })

    res.status(200).json(user.fullName)


}