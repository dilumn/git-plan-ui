(function (angular) {
    "use strict";

    var routeConfig = function ($stateProvider) {

        var addplan = {
            url: "/",
            templateUrl: "scripts/app/addPlan/addPlan.html",
            controller: "AddPlanController",
            controllerAs: "vm",
        };


        $stateProvider.state("index.addplan", addplan);
    };
    routeConfig.$inject = ["$stateProvider"];

    angular.module("app").config(routeConfig);

}(angular));