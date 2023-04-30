
import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    fullName: {
        type: String,
        minLength: 3
    },
    userName: {
        type: String,
        minLength: 3
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    ,
    createAt: {
        type: Date,
        default: () => Date.now()
    },
})

const User = models.User || model('User', userSchema)

export default User