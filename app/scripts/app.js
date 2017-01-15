  var routeConfig = function ($stateProvider) {

        var main = {
            url: "/",
            templateUrl: "scripts/app/main.html",
            controller: "MainController",
            controllerAs: "vm",
        };


        $stateProvider.state("index", main);
    };
    routeConfig.$inject = ["$stateProvider"];

  angular
  .module('app', ['ngMaterial', 'ngAnimate', 'ui.router'])
  .config(routeConfig)
  .run(['$state', function ($state) {
    $state.go('index');
  }]);

