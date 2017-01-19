

(function(){

	angular
  .module('app')
  .controller('MainController', ['$scope', '$state', MainController]);

  function MainController($scope, $state) {

    const electron = require('electron');
    const {ipcRenderer} = electron;
    const {remote} = electron;

    var vm = this;


    vm.addTask = function () {
      $state.go('addplan');
    }

    vm.execute = function () {
      $state.go('execute');
    }

  }

})();