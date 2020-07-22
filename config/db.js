const mongoose = require('mongoose');

URI = 'mongodb+srv://shravandev:shravan123@shravandev.liqcw.mongodb.net/devcamper?retryWrites=true&w=majority';
const connectDB = async () => {
     const conn = await mongoose.connect(URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log('MongoDB Connected:',conn.connection.host);
};

module.exports = connectDB;