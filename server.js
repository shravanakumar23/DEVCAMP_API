const express = require('express');
const dotenv = require('dotenv');

//dev env var

dotenv.config({ path: '.config/config.env'});

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log('Server running in 5000 ')
);