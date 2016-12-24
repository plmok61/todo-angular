const db = require('../db')
const Todo = require('../models/todos')
const mongoose = require('mongoose')

exports.createTodo = function(req, res) {
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
  Todo.find()
    .then(response => {
      res.send(response)
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
}

exports.completeTodo = function(req, res) {
  Todo.findByIdAndUpdate(req.body._id, {$set: req.body},{new: true})
    .then(response => {
      console.log('todo updated: ',response)
      res.send(response)
    })
    .catch(err => {
      console.log('Error updating todo: ', err)
    })
}

exports.deleteTodo = function(req, res) {
  Todo.findByIdAndRemove(req.params.id)
    .then(response => {
      console.log('Deleted: ', response)
      res.send(response)
    })
    .catch(err => {
      console.log('Error deleting todo: ',err)
    })
}