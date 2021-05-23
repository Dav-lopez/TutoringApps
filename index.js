const express = require('express');

const app = express();

// connetion string
const connetion = "mongodb://localhost:27017"

// connection client
const mongoclient = require('mongodb').MongoClient;

const client = new mongoclient.connect(connetion,{
    useNewUrlParser : true,
    useUnifiedTopology : true
},(err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })

/*app.use(express.json)


app.get('/books', (req, res) => {
    client.connect((err, connectedClient) => {
        if (err) return res.status(500).json({message: err.message});
        const db = connectedClient.db("bookshop")
        db.collection("bookshop").find({}).toArray((err, result) => {
            if (err) {return res.status(500).json({message: err});
        } 
        return res.status(200).json({books : result});
        })
    })
})

app.post('/books', (req, res) => {
    client.connect((err, connectedClient) => {
        if (err) return res.status(500).json({message: err.message});
        const db = connectedClient.db("bookshop")
        db.collection("bookshop").insertOne({
            autor: req.body.autor,
            title: req.body.title
        },(err, res) => {
            if (err) return res.status(500).json({message: err.message});
            return res.status(200).json({message: "new book added"});
        }
        )
    })
})
*/

app.listen(5000,()=>console.log("server is up and active"))
