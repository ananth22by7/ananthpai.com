var w = 550;
var h = 220;
var padding = 40;
var transitionDuration = 100;

// var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
//             11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

var dataset = [];

var number0 = Math.round(Math.random() * 20);

for (var j = 0; j <= number0; j++) {
   var number1 =  Math.round(Math.random() * 100);
   dataset.push(number1);
}

// dataset.push(50);

var datasetMax = Math.max.apply(Math, dataset);

var xScale = d3.scale.ordinal()
            .domain(d3.range(dataset.length))
            .rangeRoundBands([0, w], 0.05);

var yScale = d3.scale.linear()
            .domain([0, d3.max(dataset)])
            .range([0, h]);

//Create SVG element
var svg = d3.select("body")
         .append("svg")
         .attr("width", w)
         .attr("height", h);

//Create bars
svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
         return xScale(i);
   })
   .attr("y", function(d) {
         return h - yScale(d);
   })
   .attr("width", xScale.rangeBand())
   .attr("height", function(d) {
         return yScale(d);
   })
   .attr("fill", function(d) {
      return "rgb(" + (Math.round((d/datasetMax) * 234)) + "," + (Math.round((d/datasetMax) * 76)) + ", " + (Math.round((d/datasetMax) * 137)) + ")";
   });

//Create labels
svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d) {
         return d;
   })
   .attr("text-anchor", "middle")
   .attr("x", function(d, i) {
         return xScale(i) + xScale.rangeBand() / 2;
   })
   .attr("y", function(d) {
      if (yScale(d) < 20) {
         return h - yScale(d) - 8;
      }
      else {
         return h - yScale(d) + 14;
      }
   })
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", function(d) {
      if (yScale(d) < 20) {
         return "black";
      }
      else {
         return "white";
      }
   });

d3.select("a")
   .on("click", function () {
      dataset = [];

      for (var j = 0; j <= number0; j++) {
         var number2 = Math.round(Math.random() * 100);
         dataset.push(number2);
      }

      // dataset.push(50);

      datasetMax = Math.max.apply(Math, dataset);

      var yScale = d3.scale.linear()
                  .domain([0, d3.max(dataset)])
                  .range([0, h]);

      svg.selectAll("rect")
         .data(dataset)
         .transition()
         .duration(transitionDuration)
         .delay(function (d, i) {
            return (i / dataset.length) * 1000;
         })
         .attr({
            "y": function(d) {
               return h - yScale(d);
            },
            "height": function(d) {
               return yScale(d);
            },
            "fill": function(d) {
               return "rgb(" + (Math.round((d/datasetMax) * 234)) + "," + (Math.round((d/datasetMax) * 76)) + ", " + (Math.round((d/datasetMax) * 137)) + ")";
            }
         });

      svg.selectAll("text")
         .data(dataset)
         .transition()
         .duration(transitionDuration)
         .delay(function (d, i) {
            return (i / dataset.length) * 1000;
         })
         .text(function(d) {
            return d;
         })
         .attr("x", function(d, i) {
              return xScale(i) + xScale.rangeBand() / 2;
         })
         .attr("y", function(d) {
            if (yScale(d) < 20) {
               return h - yScale(d) - 8;
            }
            else {
               return h - yScale(d) + 14;
            }
         })
         .attr("fill", function(d) {
            if (yScale(d) < 20) {
               return "black";
            }
            else {
               return "white";
            }
         });
   })