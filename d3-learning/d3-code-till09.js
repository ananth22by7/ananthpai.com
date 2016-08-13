var w = 800;
var h = 300;
var padding = 20;
var dataset = [];

// var number0 = Math.round(Math.random() * 12);
var number0 = 4;

for (var i = 0; i < number0; i++) {
   var number1 = Math.round(Math.random() * 100);
   var number2 = Math.round(Math.random() * 100);
   dataset.push([number1, number2]);
};

var datasetMerged = [].concat.apply([], dataset);
var datasetMax = Math.max.apply(Math, datasetMerged);

var xScale = d3.scale.ordinal()
                     .domain(d3.range(dataset.length))
                     .rangeRoundBands([padding, w - padding]);

var realRangeBand = xScale.rangeBand()/2 - (0.05 * xScale.rangeBand());

var yScale = d3.scale.linear()
                     .domain([0, d3.max(dataset, function (d) {
                        return Math.max(d[0], d[1]);
                     })])
                     .range([1, h - padding]);

var svg = d3.select("body")
            .append("svg")
            .attr({
               "width": w,
               "height": h
            });

var grp = svg.selectAll("g")
               .data(dataset)
               .enter()
               .append("g");

grp.append("rect")
   .attr({
      "x": function (d, i) {
         return xScale(i);
      },
      "y": function (d) {
         return (h - yScale(d[0]));
      },
      "width": realRangeBand,
      "height": function (d) {
         return yScale(d[0]);
      },
      "fill": function(d) {
         return "rgb(" + Math.round((d[0] * 255) / datasetMax) + ", 0, 0)";
      }
   });

grp.append("text")
   .attr({
      "x": function (d, i) {
         return xScale(i) + (realRangeBand/2);
      },
      "y": function (d) {
         if (yScale(d[0]) > 20) {
            return 14 + h - yScale(d[0]);
         }
         else {
            return h - yScale(d[0]) - 8;
         }
      },
      "font-family": "sans-serif",
      "font-size": "11px",
      "fill": function (d) {
         if (yScale(d[0]) > 20) {
            return "white";
         }
         else {
            return "black";
         }
      },
      "text-anchor": "middle"
   })
   .text(function (d) {
      return d[0];
   });


grp.append("rect")
   .attr({
      "x": function (d, i) {
         return realRangeBand + xScale(i);
      },
      "y": function (d) {
         return (h - yScale(d[1]));
      },
      "width": realRangeBand,
      "height": function (d) {
         return yScale(d[1]);
      },
      "fill": function(d) {
         return "rgb( 0, 0, " + Math.round((d[1] * 255) / datasetMax) + ")";
      }
   });

grp.append("text")
   .attr({
      "x": function (d, i) {
         return realRangeBand + xScale(i) + (realRangeBand/2);
      },
      "y": function (d) {
         if (yScale(d[1]) > 20) {
            return 14 + h - yScale(d[1]);
         }
         else {
            return h - yScale(d[1]) - 8;
         }
      },
      "font-family": "sans-serif",
      "font-size": "11px",
      "fill": function (d) {
         if (yScale(d[1]) > 20) {
            return "white";
         }
         else {
            return "black";
         }
      },
      "text-anchor": "middle"
   })
   .text(function (d) {
      return d[1];
   });

//On click stuff after this point

d3.select("p")
   .on("click", function() {

      dataset = [];

      for (var i = 0; i < number0; i++) {
         var number3 = Math.round(Math.random() * 100);
         var number4 = Math.round(Math.random() * 100);
         dataset.push([number3, number4]);
      };

      grp = svg.selectAll("rect")
               .data(dataset);

      grp.attr({
            // "x": function (d, i) {
            //    return xScale(i);
            // },
            "y": function (d) {
               return (h - yScale(d[0]));
            },
            "width": realRangeBand,
            "height": function (d) {
               return yScale(d[0]);
            },
            "fill": function(d) {
               return "rgb(" + Math.round((d[0] * 255) / datasetMax) + ", 0, 0)";
            }
         });

      grp.attr({
            // "x": function (d, i) {
            //    return realRangeBand + xScale(i);
            // },
            "y": function (d) {
               return (h - yScale(d[1]));
            },
            "width": realRangeBand,
            "height": function (d) {
               return yScale(d[1]);
            },
            "fill": function(d) {
               return "rgb(0, 0, " + Math.round((d[1] * 255) / datasetMax) + ")";
            }
         });

   });