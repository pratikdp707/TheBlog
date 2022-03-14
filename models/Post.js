const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title : {
        type: String,
        required: true,
        unique : true
    },
    description : {
        type: String,
        required: true
    },
    picture : {
        type: String,
        required: false
    },
    username : {
        type: String,
        required: true
    },
    category : {
        type: String,
        required: true
    },
    subcategory : {
        type: String,
        requried: false
    },
    createdDate :{
        type: Date
    }
})

const Post = mongoose.model('post', PostSchema)
module.exports = Post;