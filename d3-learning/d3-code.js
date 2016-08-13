var w = 550;
var h = 220;
var padding = 40;
var transitionDuration = 400;
var dataset = [];

var maxValue = 20;
var number0 = Math.round(Math.random() * maxValue);

for (var j = 0; j <= number0; j++) {
   var number1 =  Math.round(Math.random() * 100);
   dataset.push(number1);
}

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
      return "rgb(" + (Math.round((d/datasetMax) * 26)) + "," + (Math.round((d/datasetMax) * 188)) + ", " + (Math.round((d/datasetMax) * 156)) + ")";
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

d3.select("a.change-add")
   .on("click", function () {
      datasetLength = dataset.length + 1; //adding a few bars to the set
      dataset = [];

      for (var j = 0; j < datasetLength; j++) {
         var number2 = Math.round(Math.random() * 100);
         dataset.push(number2);
      }

      datasetLength = dataset.length; //taking new dataset's length
      datasetMax = Math.max.apply(Math, dataset);

      xScale.domain(d3.range(dataset.length));

      var yScale = d3.scale.linear()
                  .domain([0, d3.max(dataset)])
                  .range([0, h]);

      var bars = svg.selectAll("rect").data(dataset);

      bars.enter()
            .append("rect")
            .attr({
               "x": w + padding,
               "y": function(d) {
                  return h - yScale(d);
               },
               "width": xScale.rangeBand(),
               "height": function(d) {
                  return yScale(d);
               },
               "fill": function(d) {
                  return "rgb(" + (Math.round((d/datasetMax) * 26)) + "," + (Math.round((d/datasetMax) * 188)) + ", " + (Math.round((d/datasetMax) * 156)) + ")";
               }
            });

      bars.transition()
            .duration(transitionDuration)
            .delay(function (d, i) {
               return (i / dataset.length) * 1000;
            })
            .attr({
               "x": function(d, i) {
                  return xScale(i);
               },
               "y": function(d) {
                  return h - yScale(d);
               },
               "width": xScale.rangeBand(),
               "height": function(d) {
                  return yScale(d);
               },
               "fill": function(d) {
                  return "rgb(" + (Math.round((d/datasetMax) * 26)) + "," + (Math.round((d/datasetMax) * 188)) + ", " + (Math.round((d/datasetMax) * 156)) + ")";
               }
            });

      svg.selectAll("text")
         .data(dataset)
         .enter()
         .append("text")
         .text(function(d) {
            return d;
         })
         .attr("x", function(d, i) {
              return w + padding + (xScale.rangeBand() / 2);
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
         })
         .attr("font-family", "sans-serif")
         .attr("font-size", "11px")
         .attr("text-anchor", "middle");

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

d3.select("a.change-remove")
   .on("click", function () {

      dataset.shift();

      var bars = svg.selectAll("rect").data(dataset);

      bars.exit()
            .transition()
            .duration(500)
            .attr("x", w + padding)
            .remove();

      svg.selectAll("text").data(dataset)
         .exit()
         .transition()
         .duration(500)
         .attr({
            "x": function (d, i) {
               return w + padding + xScale.rangeBand() / 2;
            }
         })
         .remove();

      xScale.domain(d3.range(dataset.length));

      var yScale = d3.scale.linear()
                  .domain([0, d3.max(dataset)])
                  .range([0, h]);

      bars.enter()
            .append("rect")
            .attr({
               "x": w + padding,
               "y": function(d) {
                  return h - yScale(d);
               },
               "width": xScale.rangeBand(),
               "height": function(d) {
                  return yScale(d);
               },
               "fill": function(d) {
                  return "rgb(" + (Math.round((d/datasetMax) * 26)) + "," + (Math.round((d/datasetMax) * 188)) + ", " + (Math.round((d/datasetMax) * 156)) + ")";
               }
            });

      bars.transition()
            .duration(transitionDuration)
            .delay(function (d, i) {
               return (i / dataset.length) * 1000;
            })
            .attr({
               "x": function(d, i) {
                  return xScale(i);
               },
               "y": function(d) {
                  return h - yScale(d);
               },
               "width": xScale.rangeBand(),
               "height": function(d) {
                  return yScale(d);
               },
               "fill": function(d) {
                  return "rgb(" + (Math.round((d/datasetMax) * 26)) + "," + (Math.round((d/datasetMax) * 188)) + ", " + (Math.round((d/datasetMax) * 156)) + ")";
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
   });