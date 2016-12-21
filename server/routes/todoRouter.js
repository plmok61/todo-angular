const express = require('express')
const router = express.Router()
const todos = require('../controllers/todoController')

router.route('/').post(todos.create)

router.route('/todos').get(todos.getAllTodos)

router.route('/todos/:id').delete(todos.delete)