
const express = require('express')
const router = express.Router()

const postController = require('../controllers/postsControllers')

router.get('/posts', postController.getAll)

module.exports = router