import Comment from "@/models/Comments"
import connectDb from "@/utils/connectDB"


export default async function handler(req, res) {

    if (req.method === 'POST') {

        try {
            await connectDb()
        } catch (err) {
            res.status(402).json("Error in connected to database")
        }
        const { userName, comment } = req.body

        if (!userName || !comment) return res.status(401).json("data is undefind")

        const newComment = {
            userName,
            comment,
            ok: false,
            answer: "0"
        }

        try {
            const comment = Comment.create(newComment)
            res.status(201).json({ message: 'successfylly', comment })
        } catch (err) {
            res.status(401).json({ message: 'Error' })

        }


    }


}