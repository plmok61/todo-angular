angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this
    todoList.todos = []

    todoList.addTodo = function() {
      if (todoList.todoText) {
        todoList.todos.push({text: todoList.todoText, completed: false})
        todoList.todoText = ''
        console.log('todos:',todoList.todos)
      } else {
        alert('cannot be blank')
      }

    }

    todoList.removeTodo = function() {

    }

})