const mongoose = require('mongoose');


//schema basically represent structure of JSON Document we will use as database
const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    userEmail: {
        type: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
}, { timestamps: true });

tweetSchema.virtual('contentWithEmail').get(function process() { //contentWithEmail will not be actually present in database it will only be computed during runtime.It is "virtuals"
    return `${this.content} \n Created By: ${this.userEmail}`;
})

const Tweet = mongoose.model('Tweet', tweetSchema); //This model name i.e. "Tweet" will become "Tweets" . Its default behaviour of ODMs and ORMs 
module.exports = Tweet;