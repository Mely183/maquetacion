
const express = require('express')
const router = express.Router()

const postController = require('../controllers/postsControllers')

router.get('/posts', postController.getAll)

router.get('/posts/:id', postController.getById)

router.post('/posts', postController.post)

module.exports = router