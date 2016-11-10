angular.module("blankSlate").controller("mainCtrl", function(mainServ, $scope){
//login
  $scope.loginUser = function(user){
    console.log(user);//PLEASE DELETE THIS
  mainServ.loginUser(user)
    .then(function(response){
      mainServ.getCurrentUser()
        .then(function(response){
          $scope.currentUser = response;
          $state.go("home");
        })
    })

  };

//does this need to be a directive?
$scope.register = function(){
  console.log("sdfhjsdfhsdghujghss");//THIS TOO
  var registerPage = angular.element("<br/><div><form><input type='text' placeholder='User Email' ng-model='user.email'><input placeholder='User Password' type='password' ng-model='user.password'><input placeholder='User Name' type='text' ng-model='user.name'><button type='submit' name='login'>login!</button></form></div>");

  var getregister = document.getElementById("registering");

  getregister.append(registerPage);

};


//foodapi


});
