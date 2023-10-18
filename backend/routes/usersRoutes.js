const express = require('express')
const router = express.Router()

const userController = require('../controllers/usersController')
router.get('/users', userController.getAll)

router.get('/users/:id', userController.getById)

router.post('/users', userController.post)