import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export default const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        match: [/^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/, 'Invalid username']
    },

    password: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        trim: true,
        minlength: 4,
        maxLength: 30,
    }

    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Invalid email"],
    },

    savedPosts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
});
