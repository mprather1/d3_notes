

var svgContainer = d3.select('body')
  .append('svg')
  .attr('width', 415)
  .attr('height', 105)
  // .style('border', '1px solid black')

var axisScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, 400]);

var yAxis = d3.axisLeft(axisScale)

var xAxis = d3.axisBottom(axisScale)

var xAxisGroup = svgContainer.append('g')
  .call(xAxis)
  
var yAxisGroup = svgContainer.append('g')
  .call(yAxis)
  

  
// var xAxis = d3.axis()
//   .scale(axisScale)