const express = require('express');

const connectDB = require('./db');

require('dotenv').config(); // allows us use .env varabiles

const { PORT } = process.env

connectDB();

// initialize expressun
const app = express();

// initialize middleware
app.use(express.json({extended: false}));

// create basic express routes
app.get('/', (req, res) => res.json({message: "Welcome to CURD"}));

// PORT O
const port = process.env.PORT || PORT;

// listen on
app.listen(port, () => console.log(`app running on port ${port}`));