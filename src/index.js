const express = require('express');
const connect = require('./config/database');
const app = express();

const Tweet = require('./models/tweet');

app.listen(3000, async () => {
    console.log("Server started on PORT: 3000 ");
    await connect();
    console.log("MondoDB connected");
    const tweet = await Tweet.create({
        content: 'First tweet',
        userEmail: 'a@b.com'
    });
    console.log(tweet);
})


