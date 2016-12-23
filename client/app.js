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

    //For some reason this is not sending data
    $http.post('/todos', data)
      .then((response) => {
        $scope.formData = {}
        $scope.todos = response.data
        console.log(response.data)
      }, (error) => {
        console.log('Error creating todo: ', error)
      })
  }

  $scope.deleteTodo = function(id) {

  }
}])
