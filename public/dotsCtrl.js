angular.module("blankSlate").controller("dotsCtrl", function(mainServ, $scope){


  $scope.test = console.log("hey");


  //d3 line draw
//   var line;
//
// var vis = d3.select("div").append("svg")
//     .attr("width", 1900)
//     .attr("height", 1000)
//     .on("mousedown", mousedown)
//     .on("mouseup", mouseup);
//
// function mousedown() {
//
//     var m = d3.mouse(this);
//     line = vis.append("line")
//         .attr("x1", m[0])
//         .attr("y1", m[1])
//         .attr("x2", m[0])
//         .attr("y2", m[1]);
//   console.log(m);
//     vis.on("mousemove", mousemove);
// }
//
// function mousemove() {
//     var m = d3.mouse(this);
//     line.attr("x2", m[0])
//         .attr("y2", m[1]);
// }
//
// function mouseup() {
//     vis.on("mousemove", null);
// }


// d3 dragline
var activeLine;

var renderPath = d3.svg.line()
    .x(function(d) { return d[0]; })
    .y(function(d) { return d[1]; })
    .tension(0)
    .interpolate("cardinal");

var svg = d3.select("svg")
    .call(d3.behavior.drag()
      .on("dragstart", dragstarted)
      .on("drag", dragged)
      .on("dragend", dragended));

function dragstarted() {
  activeLine = svg.append("path").datum([]).attr("class", "line");
  activeLine.datum().push(d3.mouse(this));
}

function dragged() {
  activeLine.datum().push(d3.mouse(this));
  activeLine.attr("d", renderPath);
}

function dragended() {
  activeLine = null;
}



});
