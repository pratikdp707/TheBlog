const { response } = require('express')
const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//Route 1 : create post
router.post('/create', async(req, res) => {
    console.log(req.body)
    try {
        const post = await new Post(req.body);
        post.save();

        res.status(200).json("blog saved successfully");
    } catch (error) {
        res.status(500).json(error);
    }
})

//Route 2 : get all posts
router.get('/getAll', async (req, res) => {
    let username = req.query.username;
    let category = req.query.category;
    let posts;
    try {
        if(username) {
            posts = await Post.find({username})
        }
        else if(category){
            posts = await Post.find({category})
        }
        else{
            posts = await Post.find({})
        }
        
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Route 3 : get post through id
router.get('/get/:id', async(req, res) => {
    try {
        let post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error);
    }
})


//Route 4 : update post 
router.put('/update/:id', async(req, res) => {
    try{
        let post = await Post.findByIdAndUpdate(req.params.id,{
            $set : req.body
        })
        res.status(200).json("blog update successfully")
    } catch(error) {
        res.status(500).json(error);
    }
})

//Route 5 : delete post
router.delete('/delete/:id', async(req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("blog deleted successfully")
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = router;