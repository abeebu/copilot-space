// create web server

// import modules
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const Post = require('../models/post');
const User = require('../models/user');
const { isLoggedIn } = require('../middleware');



// create comment
router.post('/posts/:id/comments', isLoggedIn, async (req, res) => {
    // do something
    try {
        // try to find post
        const post = await Post.findById(req.params.id);

    } catch (err) {
        console.log(err);
        res.redirect('/posts');
    }
});