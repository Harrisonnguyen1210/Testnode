'use strict';

console.log('Hello world');

const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/a.html")
});


app.listen(3000);
