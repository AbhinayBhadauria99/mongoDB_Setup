const mongoose = require('mongoose');


//schema basically represent structure of JSON Document we will use as database
const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    userEmail: {
        type: String
    }
});

const Tweet = mongoose.model('Tweet', tweetSchema); //This model name i.e. "Tweet" will become "Tweets" . Its default behaviour of ODMs and ORMs 
module.exports = Tweet;