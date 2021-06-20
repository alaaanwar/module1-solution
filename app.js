(function() {
'use strict';

  angular.module('myFirstApp', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];


   function LunchCheckController($scope){

    //$scope.msg = "Check If Too Much";

    $scope.myFunc = function() {

//$scope.name='';

      console.log("value is:"+$scope.name);

      if($scope.name=='')
        $scope.msg="Please enter data first";

        else {

          const words = $scope.name.split(',');
          //console.log("name"+ $scope.name);

          var counter=0;

            for(var i=0; i< words.length; i++)
            counter++;

            //console.log("counter"+counter);

              if(counter<=3)
                  $scope.msg ="Enjoy!";
              else
                $scope.msg ="Too much";

        }
    };


}

})();
