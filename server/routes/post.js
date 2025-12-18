const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const requireLogin = require('../middleware/requireLogin');

router.get('/mypost', requireLogin, (req,res)=>{
    Post.find({postedBy: req.user._id})
    .then(myposts=>{
        res.json({myposts})
    })
    .catch(err=>{
        console.log(err);
    })
})

router.get('/allposts', (req,res)=>{
    Post.find()
    .populate("postedBy", "_id name")
    .then(posts=>{
        res.json({posts});
    })
    .catch(err=>{
        console.log(err);
    });
});

router.post('/createpost', requireLogin, (req,res)=>{
    const {title, body} = req.body;
    if(!title || !body){
        return res.status(422).json({error: "Please add all the fields"});
    }

    req.user.password = undefined;
    const post = new Post({
        title,
        body,
        postedBy: req.user
    });

    //res.send({post});
    post.save().then(result=>{
        res.send({post:result});
    })
});



module.exports = router;
