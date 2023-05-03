import Comment from "@/models/Comments"
import connectDb from "@/utils/connectDB"

export default async function handler(req, res) {

    try {
        await connectDb()
    } catch (err) {
        res.status(402).json("Error in connected to database")
    }

    if (req.method === 'GET') {

        try {

            const comments = await Comment.find()
            res.status(200).json(comments.reverse())
        } catch (err) {
            res.status(400).json(err)

        }
    }



}