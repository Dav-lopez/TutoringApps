/**?
 * create function for mongodb
 * start a local mongodb server connection 
 */

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