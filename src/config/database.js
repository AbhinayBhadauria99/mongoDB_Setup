const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://0.0.0.0:27017/sample_dev'); //sample_dev is the collection which we want to make
}

module.exports = connect;