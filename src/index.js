const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
app.listen(3000, async () => {
    console.log("Server started on PORT: 3000 ");
    await connect();
    console.log("MondoDB connected");
    // const tweet = await Tweet.create({
    //     content: 'Second tweet',
    //     userEmail: 'a@b.com'
    // });
    //  const tweets = await Tweet.find({ userEmail: 'a@b.com' });
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getWithComments('65d4aefdc5347386d3f0a30f');
    console.log(tweet);
})


