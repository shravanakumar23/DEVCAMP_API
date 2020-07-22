const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

//dev env var

dotenv.config({ path: '.config/config.env'});

connectDB();


//route file

const bootcamps = require('./routes/bootcamps');



const app = express();

 //run in dev mode 

    app.use(morgan('dev'));


//Mount router

app.use('/api/v1/bootcamps', bootcamps);

 
const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log('Server running in',PORT)
);