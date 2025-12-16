const express = require('express')
const app = express();

const customMiddleware = (req,res,next) => {
    console.log("Middleware is executed");
    next();
}
app.use(customMiddleware);

app.get('/', (req, res) => {
    console.log("Hello world");
    res.send("Hello world");
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})