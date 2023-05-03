import User from "@/models/Users"
import connectDb from "@/utils/connectDB"

export default async function handler(req, res) {

    try {
        await connectDb()
    } catch (err) {
        res.status(402).json("Error in connected to database")
    }

    if (req.method === 'GET') {

        try {

            const users =await User.find()
            res.status(200).json(users)
        } catch (err) {
            res.status(400).json(err)

        }
    }



}