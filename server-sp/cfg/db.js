const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const { mongo, env } = require('./vars');
mongoose.Promise = Promise;
mongoose.connection.on('error', function (err) {
    console.error('Mongo DB Connection Error: ' + err.message);
    process.exit(1);
});

if (process.env.NODE_ENV !== 'development') {
    mongoose.set('debug', true);
}

exports.connect = () => {
    mongoose.connect(process.env.MONGO_URI, {
        keepAlive: 1,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((data) => console.log(`MongoDB Connected: ${mongoose.connection.host}`));
    return mongoose.connection;
}