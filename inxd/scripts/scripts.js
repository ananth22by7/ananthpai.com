// window.setTimeout(function(){
//   $('#XMLID_116_').addClass("move-bitch");
// }, 3000);

var s = Snap("#inxd-logo");
// var xLarge = s.select("#XMLID_31_");
var endPoints = "161.1, 544.7, 0, 411.7, 1, 741";

var xLarge = s.polygon(159.1,570.7, 0,411.7, 0,729.8);

xLarge.attr({"id": "XMLID_31_", "class": "x-large", fill: "black"});

window.setTimeout(function() {
	$('#other-elements').addClass("fade-elements");
	$('#XMLID_116_').addClass("move-i-dot");
	$('#XMLID_31_').addClass("move-x-large");
	$('#XMLID_26_').addClass("move-d");
	$('#inxd-wordmark').addClass("inxd-wordmark-fade");
	xLarge.animate({
		points: endPoints
	}, 900);
}, 2000);