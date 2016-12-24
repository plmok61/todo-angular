var todoApp = angular.module('todoApp', [])

todoApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
  
  $scope.formData = {}

  $scope.getAllTodos = function() {
    $http.get('/todos')
      .then(response => {
        $scope.todos = response.data
        $scope.calcComplete()
      }, (error) => {
        console.log('Error getting todos: ', error)
      })
  }

  $scope.getAllTodos()

  $scope.createTodo = function() {

    const data = $scope.formData

    $http.post('/todos', data)
      .then(response => {
        $scope.formData = {}
        $scope.todos = response.data
        console.log(response.data)
      }, (error) => {
        console.log('Error creating todo: ', error)
      })
  }

  $scope.completeTodo = function(todo) {
    todo.completed = !todo.completed
    $http.put(`/todos/${todo._id}`, todo)
      .then(response => {
        for(let i = 0; i < $scope.todos.length; i++) {
          if ($scope.todos[i]._id === response.data._id) {
            $scope.todos[i].completed = response.data.completed
          }
          $scope.calcComplete()
        }
      })
  }

  $scope.deleteTodo = function(id) {
    $http.delete(`/todos/${id}`)
      .then(response => {
        console.log('deleted: ', response)
        $scope.getAllTodos()
      })
  }

  $scope.calcComplete = function() {
    $scope.completed = $scope.todos.reduce((acc, todo) => {
      return acc + (todo.completed ? 1 : 0)
    }, 0)

  }

}])
