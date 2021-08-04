

$(document).ready(function() {
	let entries = [
		{label : "HTML"},
		{label : "CSS"},
		{label : "Wordpress"},
		{label : "Boostrap"},
		{label : "Git"},
		{label : "REST"},
		{label : "JQuery"},
		{label : "ReactJS"},
		{label : "JSON"},
		{label : "GASP"},
		{label : "ES5/ES6"},
		{label : "npm"},
		{label : "SQI"},
		{label : "_lodash"},
		{label : "NodeJS"},
		{label : "Angular"},
		{label : "TypeScript"},
		{label : "BEM"},
		{label : "Shopify"}
	];

	let setings = {
		entries : entries,
		width: 750,
		height : 700,
		radius : '78%',
		radiusMin : 75,
		bgDraw : true,
		bgColor : "#1d1d1d",
		opacityOver : 0.4,
		opacityOut : 0.4,
		opacitySpeed : 6,
		fov : 800,
		speed : 1,
		fontFamily : "Courier, Arial, sans-serif",
		fontSize : "30",
		fontColor : "#08fdd8",
		fontWeight : "bold",
		fontStyle : "normal",
		fontScretch : "normal",
		fontToUppercase : true,
	};

	$("#tag").svg3DTagCloud(setings);
});