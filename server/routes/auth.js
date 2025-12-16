const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send("Hello auth");
});

router.post('/signup', (req,res)=>{
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(422).json({error:"Please add all fields"})
    }
    return res.json({message:"Signup successful"});
});
module.exports = router;