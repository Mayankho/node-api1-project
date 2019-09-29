// implement your API here

const database = require('./data/db');

const express = require('express'); // This is how it is don from th common  js module

const server = express();
//This gives us an instance of a server powered by epress. 

server.get('/', (req, res) => {
    res.send('Hello World!');
});

server.get('/api/users', (req, res) => {
    res.send('Check the console!');
});

server.get('/api/users/:id', (req,res) => {
    res.send('Users and id goes here');
})





server.listen(8000, () => console.log("Api running on port 8000!"));

