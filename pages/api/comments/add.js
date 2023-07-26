import Comment from "@/models/Comments"
import connectDb from "@/utils/connectDB"


export default async function handler(req, res) {

    if (req.method === 'POST') {

        try {
            await connectDb()
        } catch (err) {
            res.status(402).json("Error in connected to database")
        }
        const { userName, comment, email, type } = req.body

        if (!userName || !comment) return res.status(401).json("data is undefind")

        const newComment = {
            userName,
            comment,
            email,
            types:type,
            ok: false,
            answer: "0",
        }
        console.log(newComment);

        try {
            const comment = Comment.create(newComment)
            res.status(201).json({ message: 'successfylly', comment })
        } catch (err) {
            res.status(401).json({ message: 'Error' })

        }


    }


}