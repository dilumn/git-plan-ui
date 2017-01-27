(function (angular) {
    'use strict';
    var addPlanController = function ($state, $scope) {
      var vm = this;

      var initialize = function () {
      }

      vm.back = function () {
        $state.go('index');
      }

      initialize();
    };

    addPlanController.$inject = ['$state', '$stateParams', '$scope'];
    angular.module('app')
        .controller('AddPlanController', addPlanController);

}(angular));
