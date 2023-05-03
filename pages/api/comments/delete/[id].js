import Comment from "@/models/Comments"
import connectDb from "@/utils/connectDB"

export default async function handler(req, res) {

    if (req.method !== 'DELETE') return res.status(400).json("bad request")


    try {
        await connectDb()
    } catch (err) {
        res.status(402).json("Error in connected to database")
    }

    const id = req.query.id

    try {

        await Comment.deleteOne({ _id: id })
        res.status(200).json("delete successfully")
    } catch (err) {
        res.status(400).json(err)

    }




}