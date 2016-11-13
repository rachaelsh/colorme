angular.module("blankSlate").controller("mainCtrl", function(mainServ, $scope, $state){
//login
  $scope.loginUser = function(user){
    console.log(user);//PLEASE DELETE THIS
  mainServ.loginUser(user)
    .then(function(response){
      mainServ.getCurrentUser()
        .then(function(response){
          $scope.currentUser = response;
          // $state.go("profile");
        })
    })
  };
  $scope.logoutUser = function(){
    console.log("lets bounce");
    $scope.currentUser = null;
  };



});
