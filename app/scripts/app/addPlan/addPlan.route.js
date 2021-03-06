(function (angular) {
    "use strict";

    var routeConfig = function ($stateProvider) {

        var addplan = {
            url: "/addplan",
            templateUrl: "scripts/app/addPlan/addPlan.html",
            controller: "AddPlanController",
            controllerAs: "vm",
        };


        $stateProvider.state("addplan", addplan);
    };
    routeConfig.$inject = ["$stateProvider"];

    angular.module("app").config(routeConfig);

}(angular));