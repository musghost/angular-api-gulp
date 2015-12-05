(function() {
  'use strict';

  angular
    .module('angular')
    .controller('MainController', MainController)
    .controller('EditController', EditController);

  /** @ngInject */
  function MainController($scope, $http, $resource, nombre) {
    var Projects = $resource('http://localhost:3000/api/Proyects/:id', {id: '@id'});

    Projects.query(function(data){
      console.log(data);
      $scope.projects = data;
    });
  }

  function EditController($scope, $stateParams, $resource, nombre) {
    var Projects = $resource('http://localhost:3000/api/Proyects/:id', {id: '@id'}, {'update':{method: 'PUT'}});
    $scope.alerts = [];
    console.log($stateParams.id);
    console.log('Edit controller');
    Projects.get({id: $stateParams.id}, function(project) {
     $scope.project = project; 
     console.log(project);
    });
    $scope.save = function() {
      $scope.project.$update();
      $scope.alerts.push({type:'danger', msg: 'Mensaje de error'});
    };
    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
  }
})();







