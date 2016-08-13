var w = 600;
var h = 600;
var padding = 30;

var dataset = [];

var number1 = Math.round(Math.random() * 255);
var number2 = Math.round(Math.random() * 255);
var number3 = Math.round(Math.random() * 255);

var numberd1 = Math.round(Math.random() * 5);

for (var i = 0; i <= numberd1; i++) {
   var numberd2 = Math.round(Math.random() * 1000);
   dataset.push(numberd2);
}

var dataset = dataset.sort(function(a, b) { return a - b } ); // Method to sort numbers in ascending order in an array

var svg = d3.select("body")
            .append("svg")
            .attr({
               "width": w,
               "height": h
            });

var rScale = d3.scale.linear()
                     .domain([0, d3.max(dataset, function(d) { return d; } )])
                     .range([2 * padding, w - (2 * padding)]);

svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   .attr({
      "cx": 300,
      "cy": 300,
      "r": function(d) { return rScale(d)/2; },
      "fill": "rgba(0, 0, 0, 0)",
      "stroke": "rgb(" + number1 + ", " + number2 + ", " + number3 + ")",
      "stroke-width": 1,
   });

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d) { return d; })
   .attr({
      "text-anchor": "middle",
      // "y": function(d,i) { return 300 + ( (rScale(d)/2) * Math.sin( i * (Math.PI/18) )); },
      // "x": function(d) { return 300 + ( (rScale(d)/2) * Math.cos( i * (Math.PI/18) ));  },
      "y": function(d,i) { return 300 + ( (rScale(d)/2) * Math.sin(10 * i * (Math.PI/180) ) ); },
      "x": function(d) { return 300 + ( (rScale(d)/2) * Math.cos(10 * i * (Math.PI/180) ) );  }
   })


