const express = require('express');

const app = express();

// connetion string
const connetion = "mongodb://localhost:27017/books"

// connection client
const mongoclient = require('mongodb').MongoClient;

const dbName = 'books';

const client = new mongoclient(connetion,{
    useNewUrlParser : true,
    useUnifiedTopology : true
 });
 client.connect((err, Client) => {
    if (err) throw err;
    console.log("Connected successfully to server");
    const db = Client.db(dbName)

   /* db.collection("books").find({}).toArray((err, result) => {
        console.log(result)
    })*/

    
})
app.use(express.json)
/*app.get('/books', (req, res) => {
    client.connect((err, Client) => {
        if (err) return res.status(500).json({message: err.message});
        const db = Client.db();
        db.collection().find({}).toArray((err, result) => {
            if (err) {return res.status(500).json({message: err});
        } 
        return res.status(200).json({books : result});
        })
    })
})*/

app.post('/books', (req, res) => {
    client.connect((err, Client) => {
        if (err) return res.status(500).json({message: err.message});
        const db = Client.db("books")
        db.collection("books").insertOne({
            author: req.body.author,
            title: req.body.title
        },(err, res) => {
            if (err) return res.status(500).json({message: err.message});
            return res.status(200).json({message: "new book added"});
        }
        )
    })
})



app.listen(5000, () =>console.log("server is  active"))
