(function (angular) {
    'use strict';
    var executeController = function ($state, $scope) {
        var vm = this;

        var initialize = function () {
        }

        initialize();
    };

    executeController.$inject = ['$state', '$stateParams', '$scope'];
    angular.module('app')
        .controller('ExecuteController', executeController);

}(angular));