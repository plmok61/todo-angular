const express = require('express')
const router = express.Router()
const todos = require('../controllers/todoController')

router.route('/').post(todos.create)