var circleData = [
  { "cx": 20, "cy": 20, "radius": 20, "color" : "green" },
  { "cx": 70, "cy": 70, "radius": 20, "color" : "purple" }
];

var svgContainer = d3.select('body')
  .append("svg")
  .attr('width', 400)
  .attr('height', 200)
  .style('border', '1px solid black')
  
var circles = svgContainer.selectAll('circle')
  .data(circleData)
  .enter()
  .append('circle')

var circleAttributes = circles
  .attr('cx', function(d) { return d.cx })
  .attr('cy', function(d) { return d.cy })
  .attr('r', function(d) { return d.radius })
  .attr('fill', function(d) { return d.color })
  
var text = svgContainer.selectAll('text')
  .data(circleData)
  .enter()
  .append('text')

var textLabels = text
  .attr('x', function(d) { return d.cx })
  .attr('y', function(d) { return d.cy })
  .text( function(d) { return '( ' + d.cx + ', ' + d.cy + ' )'; })
  .attr("font-family", 'sans-serif')
  .attr('font-size', '20px')
  .attr('fill', 'red')