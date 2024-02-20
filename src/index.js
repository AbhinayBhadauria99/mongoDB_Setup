const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');

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
    const tweet = await tweetRepo.update('65d47cd5c7289c4e9d93e77b', { content: 'The updated Content' });
    console.log(tweet);
})


