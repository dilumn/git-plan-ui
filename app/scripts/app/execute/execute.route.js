(function (angular) {
    "use strict";

    var routeConfig = function ($stateProvider) {

        var execute = {
            url: "/execute",
            templateUrl: "scripts/app/execute/execute.html",
            controller: "ExecuteController",
            controllerAs: "vm",
        };


        $stateProvider.state("execute", execute);
    };
    routeConfig.$inject = ["$stateProvider"];

    angular.module("app").config(routeConfig);

}(angular));