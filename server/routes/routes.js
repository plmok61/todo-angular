const router = require('express').Router()
const path = require('path')
const todos = require('../controllers/todoController')

router.route('/').get((req,res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'))
})


router.route('/todos').post(todos.create)

router.route('/todos').get(todos.getAllTodos)

router.route('/todos/:id').delete(todos.delete)

module.exports = router