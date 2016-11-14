angular.module("blankSlate").controller("dotsCtrl", function(mainServ, $scope){


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

  //add if statement for finished
}

// var clearButton = d3.select("button")






d3.select("#buttoninsert").html("clear")
  .on('click', function() {
  svg.selectAll("path").remove();
});
// };





});//end of module
