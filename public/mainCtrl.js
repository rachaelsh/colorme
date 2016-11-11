angular.module("blankSlate").controller("mainCtrl", function(mainServ, $scope, $state){
//login
  $scope.loginUser = function(user){
    console.log(user);//PLEASE DELETE THIS
  mainServ.loginUser(user)
    .then(function(response){
      mainServ.getCurrentUser()
        .then(function(response){
          $scope.currentUser = response;
          $state.go("color");
        })
    })

  };

// $scope.fillcolor = "#FFFF00";
// $scope.usercolor = "#FFFF00";
//
// $scope.userColorPick = function(n){
// $scope.usercolor = "#" + n;
// console.log(n);
// };
//
//   $scope.colorMe = function(n){
//   var currentElement = document.getElementById(n);
//   console.log(n);
//   currentElement.setAttribute("fill", $scope.usercolor);
//   //use this color to pick a soundbyte
// };


});
