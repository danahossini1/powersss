import Comment from "@/models/Comments"
import connectDb from "@/utils/connectDB"

export default async function handler(req, res) {


    if (req.method !== 'PATCH') return res.status(400).json("bad request")


    try {
        await connectDb()
    } catch (err) {
        res.status(402).json("Error in connected to database")
    }

    const id = req.query.id
    const editComment = req.body.editComment

    try {

        const comment = await Comment.findById(id)


        comment.comment = editComment

        await comment.save()

        res.status(200).json({ comment })
    } catch (err) {
        res.status(400).json(err)

    }




}