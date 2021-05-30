const express = require('express');

//const connectDB = require('./db');

require('dotenv').config(); // allows us use .env varabiles

const mongoose = require('mongoose')

const { MONGO_URI } = process.env;

require('dotenv').config();

// create function

// connectDB = () => {
//     mongoose.connect(MONGO_URI, {
//         useNewUrlParser : true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: true
//     })
//     .then(() => {console.log("Mongodb connected.....");
//     })

//     // send data to
//     .catch((err) => {console.error(err.message);
//     })

//     // exit with failure

// //     process.exit(1)
// }
const connectDB = async () => {
    try {
        await mongoose.connect (MONGO_URI, {
                    useNewUrlParser : true,
                    useUnifiedTopology: true,
                    useCreateIndex: true,
                    useFindAndModify: false
                });
                console.log("Mongodb connected.....");
        
    } catch (error) {
        console.error(error.message);

        process.exit(1);
        
    }
}

module.exports = connectDB;
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