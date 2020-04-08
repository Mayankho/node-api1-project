// implement your API here

const db = require('./data/db');

const express = require('express'); // This is how it is don from th common  js module

const server = express();
//This gives us an instance of a server powered by epress. 

server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.get('/api/users', (req, res) => {
    // If the req body is turning null then send an error respond with a http 500 erroro message
    // Return  a json  element
    db.find()
    .then(users => {

        res.status(200).json({
            message: 'You made it buddy',
        })
        .catch(err => {
            res.status(500).json({
                err: "You can not get the users information"
            })
        }
        )
    })
});

server.get('/api/users/:id', (req,res) => {
    res.send('Users and id goes here');
})

server.post('/api/users', (req, res) => {
    db.insert(user)
    .then(newUser => {
        res.status(200).json({
        })
        .catch(
            ( err => {
                res.status(400).json({
                    err: "Please provide name and bio for user",
                })
            })
        )
    })
})


server.delete('/api/users/:id', (req,res) => {
    db.remove(deleteUser)
    .then(deleteUser => {
        res.status(200).json({
            Messsage : "deleted the selection",
        })
    })
})






server.listen(8000, () => console.log("Api running on port 8000!"));

