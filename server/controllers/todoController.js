const db = require('../db')
const Todo = require('../models/todos')
const mongoose = require('mongoose')

exports.createTodo = function(req, res) {
  console.log('Create body',req.body)
  new Todo({ text: req.body.text, completed: false})
  .save()
  .then(todo => {
    console.log('created: ', todo)
    Todo.find(function(err, todos) {
      if (err) {
        res.send(err)
      }
      res.json(todos)
    })
  })
  .catch(err => {
    console.log('Error creating todoooooooooo',err)
    res.send(err)
  })
}

exports.getAllTodos = function(req, res) {
  Todo.find(function(err, todos) {
    if (err) {
      res.send(err)
    }
    res.json(todos)
  })
}

exports.completeTodo = function(req, res) {
  console.log('1 request: ',req.body.completed)
  Todo.findByIdAndUpdate(req.body._id, {$set: req.body})
  .then(response => {
    console.log('2 response: ', response.completed)
  })
  .catch(err => {
    console.log('Error updating todo: ', err)
  })
}

exports.delete = function(req, res) {

}