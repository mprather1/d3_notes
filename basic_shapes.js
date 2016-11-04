var svgContainer = d3.select('body')
  .append('svg')
  .attr('width', 200)
  .attr('height', 200)
  .style('border', '1px solid black')
  
var circle = svgContainer
  .append('circle')
  .attr('cx', 30)
  .attr('cy', 30)
  .attr('r', 5)
  .style('fill', 'green')
  
var rectangle = svgContainer
  .append('rect')
  .attr('x', 185)
  .attr('y', 5)
  .attr('width', 10)
  .attr('height', 100)
  
var elip = svgContainer
  .append('ellipse')
  .attr('cx', 100)
  .attr('cy', 100)
  .attr('rx', 10)
  .attr('ry', 25)
  
var straightLine = svgContainer
  .append('line')
  .attr('x1', 30)
  .attr('y1', 30)
  .attr('x2', 100)
  .attr('y2', 100)
  .attr("stroke-width", 2)
  .attr('stroke', 'black')