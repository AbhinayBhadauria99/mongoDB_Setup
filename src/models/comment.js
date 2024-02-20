const mongoose = require('mongoose');



const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    userEmail: {
        type: String
    }
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema); //This model name i.e. "Tweet" will become "Tweets" . Its default behaviour of ODMs and ORMs 
module.exports = Comment;