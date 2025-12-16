const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;

const {MONGOURI} = require("./keys");

mongoose.connect(MONGOURI);

mongoose.connection.on('connected', () => {
    console.log("Connected to mongoo");
})

mongoose.connection.on('error', err => {
    console.log("err connecting",err);
})
const customMiddleware = (req,res,next) => {
    console.log("Middleware is executed");
    next();
}
app.use(customMiddleware);

app.get('/', (req, res) => {
    console.log("Hello world");
    res.send("Hello world");
})

app.listen(PORT, () => {
    console.log("Server is running on port 5000");
})