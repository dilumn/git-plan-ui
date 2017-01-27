(function (angular) {
    'use strict';
    var executeController = function ($state, $scope) {
      var vm = this;

      var initialize = function () {
      }

      vm.back = function () {
        $state.go("index");
      }

      initialize();
    };

    executeController.$inject = ['$state', '$stateParams', '$scope'];
    angular.module('app')
        .controller('ExecuteController', executeController);

}(angular));
