(function() {
'use strict';

  angular.module('myFirstApp', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['scope'];


   function LunchCheckController($scope){

    $scope.msg = "Check If Too Much";

});

})();
