 angular.module("blankSlate", ['ui.router', 'ngSanitize']).config(function($stateProvider, $urlRouterProvider){
   $stateProvider.state("color", {
     url:"/",
     templateUrl: "./templates/color.html"
   })
   .state("account", {
     url: "/account",
     templateUrl: "./templates/account.html"
   })
   .state("contact", {
     url: "/contact",
     templateUrl: "./templates/contact.html"
   })
   .state("dots", {
     url: "/dots",
     templateUrl: "./templates/dots.html",
     controller: "dotsCtrl"
   })
   .state("profile", {
     url: "/profile",
     templateUrl: "./templates/profile.html"
   })
   .state("carousel", {
     url: "/carousel",
     templateUrl: "./templates/carousel.html"
   })

   $urlRouterProvider.otherwise("/");

 })
.controller("mainCtrl", function(mainServ, $scope, $sce){
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


  $scope.getColors = function(){
    console.log("colors?");
    mainServ.getColors()
    .then(function(response){
      console.log(response);
    // var imageparse = $sce.trustAsHtml(response.data.image);
      $scope.colorPages = response;
      $scope.colorPages.map(function(key){
        return document.getElementById('repeater').insertAdjacentHTML('beforeend', "<div class='box'>" + key.html);
      })
      // $scope.trustThisSVG = function(){
      //   return $sce.trustAsHtml($scope.colorPages[2].html);
      // }

      // $sce.trustAsHtml(response);
      // $scope.parsedPage = $sce.trustAsHtml(colorPages);
      // $sanitize(response.data.image);
    })
  };

  $scope.addPage = function(page){
  mainServ.addPage(page)
  .then(function(response){
    $scope.getColors();
  });
};

$scope.deletePage = function(pageToDelete){
  console.log(pageToDelete);
  mainServ.deletePage(pageToDelete)
  .then(function(response){
    $scope.getColors();//to update list
  });

};

$scope.changeThePage = function(pageToChange){
  mainServ.changeThePage(pageToChange)
  .then(function(response){
    $scope.getColors();
  });
};

});
