(function() {
  'use strict';

  angular
    .module('angular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $http, $resource, nombre) {
    $scope.form = {
      nombre: nombre
    };
    $scope.details = {};
    $scope.data = {};

   /* $http({
      url: "http://cuqui.hostapet.com/api/guest/v1/speciesDetail",
      method: "GET"
    }).then(function(response){
      $scope.details = response.data;
    });*/

    var especies = $resource("http://cuqui.hostapet.com/api/guest/v1/speciesDetail");

    especies.query(function(data){
      $scope.data = data;
    });

  }
})();







