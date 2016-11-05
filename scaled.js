var initialScaleData = [0, 1000, 3000, 2000, 5000, 4000, 7000, 6000, 9000, 8000, 10000];

var scaledData = []
var minDataPoint = d3.min(initialScaleData)
var maxDataPoint = d3.max(initialScaleData)

var linearScale = d3.scaleLinear()
  .domain([minDataPoint, maxDataPoint])
  .range([0, 100])
  
for (var i = 0; i < initialScaleData.length; i++){
  scaledData[i] = linearScale(initialScaleData[i])
}
  
console.log(scaledData)