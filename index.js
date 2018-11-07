'use strict'

console.log('Hello world')

const express = require('express')

const app = express()


app.post('/', (req, res) => {
    res.sendFile(__dirname + "/a.html")
})
app.get('/ditmemay', (req, res) => {
    res.send("ditmemay")
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    res.send(`ditmemay so ${id}`);
})

app.listen(3000)
