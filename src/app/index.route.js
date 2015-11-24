(function() {
  'use strict';

  angular
    .module('angular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('form', {
        url: '/formulario',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        resolve: {
          nombre: function(){
            return 'Andrés';
          }
        },
        onEnter: function($state){
        },
        abstract: true
      })
      .state('form.index', {
        url: '',
        templateUrl: 'app/main/form.index.html'
      })
      .state('form.address', {
        url: '/address',
        templateUrl: 'app/main/form.address.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
