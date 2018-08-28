var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

setGradient();

function setGradient() {
		body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value 
		+ ")";

		css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setGradientRandom);

function setGradientRandom() {
	var r1 = randomNumberRGB();
	var g1 = randomNumberRGB();
	var b1 = randomNumberRGB();
	var r2 = randomNumberRGB();
	var g2 = randomNumberRGB();
	var b2 = randomNumberRGB();

		body.style.background = 
		"linear-gradient(to right, " 
		+ randomNumberRGBfull(r1,g1,b1) 
		+ ", " 
		+ randomNumberRGBfull(r2,g2,b2) 
		+ ")";

	css.textContent = body.style.background + ";";

	color1.value = rgbToHex(r1, g1, b1);
	color2.value = rgbToHex(r2, g2, b2);
}

function randomNumber(min, max) {
	var result = Math.floor(Math.random() * (max - min + 1)) + min;
	return result;
}

function randomNumberRGB() {
	return randomNumber(0, 255);
}

function randomNumberRGBfull(r, g, b) {
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// Functions componentToHex and rgbToHex -->
// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb 

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}