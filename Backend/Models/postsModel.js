
const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
    id: Number,
    title: String,
    href: String,
    description: String,
    date: String,
    datetime: Date,
    category: {
        title: String,
        href: String
    },
    author: {
        name: String,
        role: String,
        href: String,
        imageUrl: String
    }
})

const PostsModel =  mongoose.model("posts",postsSchema);

module.exports = {PostsModel} 