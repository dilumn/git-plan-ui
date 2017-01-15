

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
      $state.go('index.addplan');

      // var remote2 = remote;
      // var exec = require('child_process').exec;
      // exec("ls", function(error, stdout, stderr){ console.log(stdout); } );
    }


  }

})();