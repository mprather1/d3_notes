var lineData = [ 
  { "x": 1,   "y": 5},
  { "x": 20,  "y": 20},
  { "x": 40,  "y": 10},
  { "x": 60,  "y": 40},
  { "x": 80,  "y": 5},
  { "x": 100, "y": 60},
  {"x": 145, "y": 30},
  { "x": 200, "y": 200}
];
 
var lineFunction = d3.line()
  .x(function(d) { return d.x })
  .y(function(d) { return d.y })
  .curve(d3.curveCatmullRom.alpha(0.5));

var svgContainer = d3.select('body')
  .append('svg')
  .attr('width', 200)
  .attr('height', 200)
  .style('border', '1px solid black')
  
var lineGraph = svgContainer
  .append('path')
  .attr('d', lineFunction(lineData))
  .attr('stroke', 'steelblue')
  .attr('stroke-width', 2)
  .attr('fill', 'none')
