const express = require('express');

const app = express();

// connetion string
const connetion = "mongodb://localhost:27017"

// connection client
const mongoclient = require('mongodb').MongoClient;

const client = new mongoclient(connetion,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

client.connect((err, connectedClient) => {
    if (err) throw err;
    const db = connectedClient.db("book shop")
})

app.listen(5000,()=>console.log("server is up and active"))