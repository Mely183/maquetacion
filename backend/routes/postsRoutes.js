
const express = require('express')
const router = express.Router()

const postController = require('../controllers/postsControllers')
//const auth = require('../middlewares/auth')

router.get('/posts', postController.getAll)

router.get('/posts/:id', postController.getById)

router.post('/posts', postController.post)

//router.delete('/posts/:id', auth.authToken, postController.delete)
router.delete('/posts/:id', postController.delete)

//router.put('/posts/:id', auth.authToken  ,postController.put)
router.put('/posts/:id', postController.put)

module.exports = router