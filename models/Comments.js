
import { Schema, model, models } from "mongoose";

const commentSchema = new Schema({
    userName: {
        type: String,

    },
    email: String,
    comment: {
        type: String,
        minLength: 3
    },
    answer: {
        type: String
    },
    types: String,
    ok: Boolean,
    createAt: {
        type: Date,
        default: () => Date.now()
    },
})

const Comment = models.Comment || model('Comment', commentSchema)

export default Comment