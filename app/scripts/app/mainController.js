

(function(){

	angular
  .module('app', ['ngMaterial', 'ngAnimate'])
  .controller('MainController', ['$scope', 'logger', MainController]);

  function MainController($scope, logger) {

    const electron = require('electron');
    const {ipcRenderer} = electron;
    const {remote} = electron;

    var vm = this;


    vm.addTask = function () {
      var remote2 = remote;
      var exec = require('child_process').exec;
      exec("ls", function(error, stdout, stderr){ console.log(stdout); } );
    }


  }

})();