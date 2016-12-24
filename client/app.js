var todoApp = angular.module('todoApp', [])

todoApp.controller('mainController', ['$scope', '$http', function($scope, $http) {
  
  $scope.formData = {}

  $http.get('/todos')
    .then((response) => {
      $scope.todos = response.data
      console.log(response.data)
    }, (error) => {
      console.log('Error getting todos: ', error)
    })


  $scope.createTodo = function() {

    const data = $scope.formData
    console.log('data: ',data)

    $http.post('/todos', data)
      .then((response) => {
        $scope.formData = {}
        $scope.todos = response.data
        console.log(response.data)
      }, (error) => {
        console.log('Error creating todo: ', error)
      })
  }

  $scope.completeTodo = function(todo) {
    console.log('1', todo)
    todo.completed = !todo.completed
    console.log('2', todo)
    $http.put(`/todos/${todo._id}`, todo)
  }

  $scope.deleteTodo = function(id) {
    console.log('delete', id)
  }
}])
