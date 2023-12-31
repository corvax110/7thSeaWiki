'use strict';
import { error } from 'console';
import express from 'express';
import open from 'open'; //allows automatic opening of localhost address
const app = express();
import path from 'path';
import __dirname from 'path';

// define all endpoints here


//open('http://localhost:8000/hello');   //opens the local host address in browser
app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
    console.log("Server started on port " + PORT);
});

app.get('/hello', function (req, res) {
    res.type('text');
    res.send('Hello World!');
});
app.get('/zelda', function (req, res) {
    res.sendFile(path.join(__dirname, "./Pages/Princess Zelda - Zelda Wiki.html"));
});
