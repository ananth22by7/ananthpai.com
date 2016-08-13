// var dataset = [];

// var limit = Math.round(Math.random() * 20);

// for (var i = 0; i <= limit; i++) {
// 	var newNumber = Math.round(Math.random() * 30);
// 	dataset.push(newNumber);
// }

// d3.select("body").selectAll("div")
//     .data(dataset)
//     .enter()
//     .append("div")
//     .attr("class", "bar")
//     .style("height", function(d) {
//   		return d*5 + "px";
//     })

// *********************************************


// var svg = d3.select("body").append("svg")
// 			.attr("width", w)
// 			.attr("height", h);

// *********************************************


// var w = 500;
// var h = 50;

// var dataset = [ 5, 10, 15, 20, 25 ];

// var circles = d3.select("body").append("svg")
//                 .selectAll("circle")
//                 .data(dataset)
//                 .enter()
//                 .append("circle");

// circles.attr("cx", function(d,i) {
//             return (i * 50) + 25;
//         })                
//        .attr("cy", h/2)
//        .attr("r", function(d) {
//             return d;
//        })
//        .attr("fill", "#bada55");

// *********************************************


var w = 500;
var h = 200;
var barPadding = 6;
var dataset = [];

var limit = Math.round(Math.random() * 20);

for (var i = 0; i <= limit; i++) {
    newNumber = Math.round(Math.random() * 25);
    dataset.push(newNumber);
}

var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)

var rectangle = svg.selectAll("rect")
                   .data(dataset)
                   .enter()
                   .append("rect")
                   .attr({
                        x: function(d,i) {
                            return i * (w/dataset.length);
                        },
                        y: function(d) {
                            return h - (d * 5);
                        },
                        width: w/(dataset.length) - barPadding,
                        height: function(d) {
                            return d * 5;
                       },
                       fill: function(d) {
                            return "rgb(0, 0, " + (d * 10) + ")";
                       }
                   });

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr({
        x: function(d, i) {
            return i * (w / dataset.length) + (( (w/dataset.length) - barPadding)/2);
        },
        y: function(d) {
            if ((d * 5) > 20) {
                return h - (d * 5) + 15;
            }
            else {
                return h - (d * 5) - 5;
            }
        },
        fill: function(d) {
            if ((d * 5) > 20) {
                return "white";
            }
            else {
                return "black";
            }
        },
        "font-family": "sans-serif",
        "font-size": "11px",
        "text-anchor": "middle"

    })