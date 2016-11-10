
var myApp = angular.module("blankSlate", ['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider){
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
    templateUrl: "./templates/other.html",
    controller: "dotsCtrl"
  })


  $urlRouterProvider.otherwise("/");

});//end of module


// myApp.directive("dipndots", function(){
//
//   var activeLine;
//
//   var renderPath = d3.svg.line()
//       .x(function(d) { return d[0]; })
//       .y(function(d) { return d[1]; })
//       .tension(0)
//       .interpolate("cardinal");
//
//   var svg = d3.select("svg")
//       .call(d3.behavior.drag()
//         .on("dragstart", dragstarted)
//         .on("drag", dragged)
//         .on("dragend", dragended));
//
//   function dragstarted() {
//     activeLine = svg.append("path").datum([]).attr("class", "line");
//     activeLine.datum().push(d3.mouse(this));
//   }
//
//   function dragged() {
//     activeLine.datum().push(d3.mouse(this));
//     activeLine.attr("d", renderPath);
//   }
//
//   function dragended() {
//     activeLine = null;
//   }
//
//
//   });
