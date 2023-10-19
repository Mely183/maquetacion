const express = require('express')
const router = express.Router()

const userController = require('../controllers/usersController')
router.get('/users', userController.get)

router.get('/users/:id', userController.getById)

//router.post('/users', userController.post)
module.exports = router