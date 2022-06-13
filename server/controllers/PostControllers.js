const router = require('express').Router()
const Post = require("../models/PostForm")

// display comments 

 router.get('/', (req, res) => {
     console.log('get')
      Post.find()
      .then(posts => {
          res.json(posts)
      })
 })

 router.post('/', (req, res) => {
     Post.create(req.body)
     .then(() =>{res.json({message: "Uploaded!"})})
     .catch(err => {console.log(err)})
 })

module.exports = router