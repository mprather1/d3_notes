var Data = Backbone.Model.extend({
  
});

var Datas = Backbone.Collection.extend({
  model: Data
});

var jsonCircle1 = new Data({ x_axis: 30, y_axis: 30, radius: 20, color: 'green'})
var jsonCircle2 = new Data({ x_axis: 70, y_axis: 70, radius: 20, color: 'purple'})
var jsonCircle3 = new Data({ x_axis: 110, y_axis: 110, radius: 20, color: 'red'})
var jsonCircles = new Datas([jsonCircle1, jsonCircle2, jsonCircle3])

var data1 = new Data({spaceCircle: 30, circleRadii: 40, nub: 1})
var data2 = new Data({spaceCircle: 70, circleRadii: 20, nub: 2})
var data3 = new Data({spaceCircle: 110, circleRadii: 10, nub: 3})
var datas = new Datas([data1, data2, data3])

// Make a purple circle
//##############################################

d3.select("body").append("p")

var bodySelection = d3.select("body");

var svgSelection = bodySelection.append("svg")
  .attr("width", 50)
  .attr("height", 50)

var circleSelection = svgSelection.append("circle")
  .attr("cx", 25)
  .attr("cy", 25)
  .attr("r", 25)
  .style("fill", "purple");

// Show data and index
//##############################################

var p = d3.select("body").selectAll("p")
  .data(datas.pluck('nub'))
  .enter()
  .append("p")
  .text(function(d, i) { 
    return "i: " + i + "; d: " + d;
});
 
 // Create three circles from radius in Backbone collection
//##############################################

var svgContainer = d3.select('body')
  .append('svg')
  .attr('width', 200)
  .attr('height', 200)
  .style('border', '1px solid black')

var circles = svgContainer.selectAll("circle")
  .data(datas.pluck('circleRadii'))
  .enter()
  .append("circle")

var circleAttributes = circles
  .attr("cx", 100)
  .attr("cy", 50)
  .attr("r", function(d) { 
    return d;
  })
  .style("fill", function(d){
    var returnColor
    if (d === 40) { returnColor = "green";
    } else if (d === 20) { returnColor = "purple";
    } else if (d === 10) { returnColor = "red"; }
    return returnColor;
  });
  
// Space circles
//##############################################
  
var svgContainerPlot = d3.select('body')
  .append("svg")
  .attr("width", 200)
  .attr('height', 200)
  .style('border', '1px solid black')

var spaceCircles = svgContainerPlot.selectAll("circle")
  .data(datas.pluck('spaceCircle'))
  .enter()
  .append("circle");
  
var spaceCircleAttributes = spaceCircles
  .attr('cx', function(d){ return d; })
  .attr('cy', function(d){ return d; })
  .attr('r', 20)
  .style('fill', function(d){
    var returnColor;
    if (d === 30) { returnColor = 'green';
    } else if (d === 70) { returnColor = 'purple';
    } else if (d === 110) { returnColor = "red"; }
    return returnColor
  });
  
// json circles
//##############################################

var svgContainerJSON = d3.select('body')
  .append('svg')
  .attr('height', 200)
  .attr('width', 200)
  .style('border', '1px solid black')
  
var jsonCirclesRender = svgContainerJSON.selectAll('circle')
  .data(jsonCircles.toJSON())
  .enter()
  .append('circle')
  
var jsonCircleAttributes = jsonCirclesRender
  .attr('cx', function(d) { return d.x_axis })
  .attr('cy', function(d) { return d.y_axis })
  .attr('r', function(d) { return d.radius })
  .attr('fill', function(d) { return d.color })