
import { Schema, model, models } from "mongoose";

const commentSchema = new Schema({
    userName: {
        type: String,

    },
    comment: {
        type: String,
        minLength: 3
    },
    answer: {
        type: String
    },
    ok: Boolean,
    createAt: {
        type: Date,
        default: () => Date.now()
    },
})

const Comment = models.Comment || model('Comment', commentSchema)

export default Comment