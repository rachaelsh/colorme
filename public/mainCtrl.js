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
      $scope.colorPages = "<svg width='40' height='40' xmlns='http://www.w3.org/2000/svg'><g><title>background</title><rect fill='#fff' id='canvas_background' height='42' width='42' y='-1' x='-1'/><g display='none' overflow='visible' y='0' x='0' height='100%' width='100%' id='canvasGrid'><rect fill='url(#gridpattern)' stroke-width='0' y='0' x='0' height='100%' width='100%'/></g></g><g><title>Layer 1</title><ellipse ry='15' rx='14' id='svg_2' cy='20' cx='20.5' stroke-width='1.5' stroke='#000' fill='#fff'/></g></svg>";

      $scope.trustThisSVG = function(){

        return $sce.trustAsHtml($scope.colorPages);
      }

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
