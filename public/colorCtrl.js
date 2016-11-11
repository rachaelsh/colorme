angular.module("blankSlate").controller("colorCtrl", function(mainServ, $scope){
//color image
$scope.fillcolor = "#ffffff";
$scope.usercolor = "#ffffff";

$scope.userColorPick = function(n){
$scope.usercolor = "#" + n;
console.log(n);
};

  $scope.colorMe = function(n){
  var currentElement = document.getElementById(n);
  console.log(n);
  currentElement.setAttribute("fill", $scope.usercolor);

};



//clear image color

$scope.colorNope = function(n){
$scope.fillcolor = "#" + n;
};//also need to save image. can we reload in here for white FROM backend?






// $scope.pathfinder = function(){
// var findpaths = d3.select("svg");
// console.log("colorimage");

// d3.selectAll("path")
//   .enter().append("path")
//   .attr("id='1' ng-click='colorMe(" + i + "1)' fill='{{fillcolor}}'")
//




// svg.selectAll("path")
//  .append
//
//     var selectedGroup = d3.select(this);
//     var selectedLine = selectedGroup.select("path.team.line");

// };

});
