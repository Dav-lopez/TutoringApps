const express = require('express');

const app = express();

// connetion string
const connetion = "mongodb://localhost:27017"

// connection client
const mongoclient = require('mongodb').MongoClient;

async function connectToDb(str){
    const client = new mongoclient(str,
        {
        useNewUrlParser : true,
        useUnifiedTopology : true
    });
    try {
        client.connect();
        return client.db()
    } catch (error) {
        console.log(error);
    }

}
connectToDb(connetionstring)
.then(db => {
    console.log("connected to db")
}).catch(err => {
    console.log(err)
});

// connection client
//const mongoclient = require('mongodb').MongoClient;

/*const client = new mongoclient(connetion,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

client.connect((err, connectedClient) => {
    if (err) throw err;
    const db = connectedClient.db("book shop")
})*/

app.listen(3500,()=>console.log("server actived"))