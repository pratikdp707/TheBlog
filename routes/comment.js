const express = require('express')
const router = express.Router()
const Comment = require('../models/Comment')

router.post('/newComment', async (req, res) => {
    try {
        const comment = await new Comment(req.body)
        comment.save()

        res.status(200).json('Comment saved successfully')
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/:id', async(req, res) => {
    try {
        const comments = await Comment.find({postId : req.params.id})
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json(error);
    }
})

router.delete('/:id', async(req, res) => {
    try{
        await Comment.findByIdAndDelete(req.params.id);
        
        res.status(200).json("Comment deleted")
    } catch(error) {
        res.status(500).json(error)
    }
})

module.exports =  router;