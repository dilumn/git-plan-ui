(function (angular) {
    'use strict';
    var addPlanController = function ($state, $scope) {
        var vm = this;

        var initialize = function () {
        }

        initialize();
    };

    addPlanController.$inject = ['$state', '$stateParams', '$scope'];
    angular.module('app')
        .controller('AddPlanController', addPlanController);

}(angular));