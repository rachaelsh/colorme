
angular.module("blankSlate", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state("home", {
    url:"/",
    templateUrl: "./templates/home.html"
  })
  .state("login", {
    url: "/login",
    templateUrl: "./templates/login.html"
  })
  .state("contact", {
    url: "/contact",
    templateUrl: "./templates/contact.html"
  })
  .state("other", {
    url: "/other",
    templateUrl: "./templates/other.html"
  })


  $urlRouterProvider.otherwise("/");
});
