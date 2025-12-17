const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const {MONGOURI} = require('./keys');

//connection to database
mongoose.connect(MONGOURI);
mongoose.connection.on('connected', () => {
    console.log("Connected to mongoo");
})
mongoose.connection.on('error', err => {
    console.log("err connecting",err);
})

//app requiring models
require('./models/User');
require('./models/Post');

//app usings
app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/post'));

//server listening
app.listen(PORT, () => {
    console.log("Server is running on port 5000");
})