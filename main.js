var Data = Backbone.Model.extend({
  
});

var Datas = Backbone.Collection.extend({
  model: Data
});

var data1 = new Data({circleRadii: 40, nub: 1})
var data2 = new Data({circleRadii: 20, nub: 2})
var data3 = new Data({circleRadii: 10, nub: 3})
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

var circles = svgContainer.selectAll("circle")
  .data(datas.pluck('circleRadii'))
  .enter()
  .append("circle")

var circleAttributes = circles
  .attr("cx", 50)
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