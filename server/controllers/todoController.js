const db = require('../db')
const Todo = require('../models/todos')
const mongoose = require('mongoose')

exports.create = function(req, res) {
  Todo.create({
    text: req.body.text,
    completed: false
  })
  .then(todo => {
    Todo.find(function(err, todos) {
      if (err) {
        res.send(err)
      }
      res.json(todos)
    })
  })
  .catch(err => {
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

exports.delete = function(req, res) {

}