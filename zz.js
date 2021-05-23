const express = require('express');
const app = express();

//const app = require('express')();
const mongodb = require('mongodb').MongoClient;

const Mongoclient = mongodb;

// connetion string
const connectionstring = "mongodb://localhost:27017/project";
//const mongoclient = require('mongodb').MongoClient;

//Database Name
const dbName = 'project';

const client = new Mongoclient(connectionstring,{
    useNewUrlParser : true,
    useUnifiedTopology : true
});
/*client.connect(function(err) {
    if (err) return console.error(err)
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});*/

// Create a new MongoClient
//const client = new MongoClient(url);

// name, email and country


client.connect((err, Client) => {
    if (err) throw err;
    console.log("Connected successfully to server");
    const db = Client.db(dbName)

   /* db.collection("project").insertOne({
        name : "Alex",
        email: "info@alex.com",
        country : "nigeria"
    
    })
    .then(doc => {
        console.log(doc);
    })
    .catch(err => {
        console.log(err);
    })*/
})
app.use(express.json())
app.get('/project', (req, res) => {
    client.connect((err, Client) => {
        if (err) return res.status(500).json({message: err.message});
        const db = Client.db("project");
        db.collection("project").find({}).toArray((err, result) => {
            if (err) {return res.status(500).json({message: err});
        } 
        return res.status(200).json({books : result});
        })
    })
})

app.post('/project', (req, res) => {
    client.connect((err, Client) => {
        if (err) {return res.status(500).json({message: err.message});
    }
        const db = Client.db("project");
        db.collection("project").insertOne({
            name : req.body.name ,
            email : req.body.email ,
            country: req.body.country 
        },(err, res) => {
            if (err) return res.status(500).json({message: err.message});
            return res.status(200).json({message: "new book added"});
        }
        )
    })
})




app.listen(4500,()=>console.log("server active"))