// var xScale = d3.scale.linear()
// 						.domain([0, d3.max(dataset, function(d) {return d[0];} )])
// 						.range([0, w]);

// var yScale = d3.scale.linear()
// 						.domain([0, d3.max(dataset, function(d) {return d[1];} )])
// 						.range([0, h]);

//

var w = 600;
var h = 600;
var padding = 40;
// var dataset = [
//                   [ 5,     20 ],
//                   [ 480,   90 ],
//                   [ 250,   50 ],
//                   [ 100,   33 ],
//                   [ 330,   95 ],
//                   [ 410,   12 ],
//                   [ 475,   44 ],
//                   [ 25,    67 ],
//                   [ 85,    21 ],
//                   [ 220,   88 ],
//                   [ 600,   150]
//               ];

var dataset = [];
var numDataPoints = 50;
var xRange = Math.random() * 1000;
var yRange = Math.random() * 1000;
for (var i = 0; i < numDataPoints; i++) {
    var newNumber1 = Math.floor(Math.random() * xRange);
    var newNumber2 = Math.floor(Math.random() * yRange);
    dataset.push([newNumber1, newNumber2]);
}


var xScale = d3.scale.linear()
						.domain([0, d3.max(dataset, function(d) { return d[0]; } )])
						.range([padding, w - padding]);

var yScale = d3.scale.linear()
						.domain([0, d3.max(dataset, function(d) { return d[1]; } )])
						.range([h - padding, padding]);

var rScale = d3.scale.linear()
						.domain([0, d3.max(dataset, function(d) { return d[1];} )])
						.range([2, 20]);

var svg = d3.select("body")
			.append("svg")
			.attr({
				"width": w,
				"height": h
			});

svg.selectAll("circle")
	.data(dataset)
	.enter()
	.append("circle")
	.attr({
		"cx": function(d) { return xScale(d[0]); },
		"cy": function(d) { return yScale(d[1]); },
		"r": function(d) { return rScale(d[1]); },
		"fill": "rgba(0,0,0,0)",
		"stroke": "rgba(0,0,0,0.6)",
		"stroke-width": 1,
		"stroke-dasharray": "2,2"
	});

svg.selectAll("text")
	.data(dataset)
	.enter()
	.append("text")
	.text(function(d) { return d[0] + ", " + d[1]; })
	.attr({
		"x": function(d) { return xScale(d[0]); },
		"y": function(d) { return yScale(d[1]); },
		"font-family": "sans-serif",
		"font-size": "11px",
		"fill": "red"
	});

var xAxis = d3.svg.axis()
					.scale(xScale)
					.orient("bottom")
					.ticks(5);

svg.append("g")
	.attr({
		"class": "axis",
		"transform": "translate(0," + (h-padding) + ")"
	})
	.call(xAxis);

var yAxis = d3.svg.axis()
					.scale(yScale)
					.orient("left")
					.ticks(5);

svg.append("g")
	.attr({
		"class": "axis",
		"transform": "translate(" + padding + ", 0)"
	})
	.call(yAxis);