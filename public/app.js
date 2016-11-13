
var myApp = angular.module("blankSlate", ['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider){
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


  $urlRouterProvider.otherwise("/");

});//end of module
