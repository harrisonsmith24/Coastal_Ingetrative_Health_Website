"use strict";
			
var laser = document.getElementById("laser");
var chiro = document.getElementById("chiro");
var physical = document.getElementById("physical");
var massage = document.getElementById("massage");
var golf = document.getElementById("golf");
var spine = document.getElementById("spine");

var laserDescription = document.getElementById("laserDescription");
var chiroDescription = document.getElementById("chiroDescription");
var physicalDescription = document.getElementById("physicalDescription");
var massageDescription = document.getElementById("massageDescription");
var golfDescription = document.getElementById("golfDescription");
var spineDescription = document.getElementById("spineDescription");

laser.addEventListener("click", DisplayAndClear1);
chiro.addEventListener("click", DisplayAndClear2);
physical.addEventListener("click", DisplayAndClear3);
massage.addEventListener("click", DisplayAndClear4);
golf.addEventListener("click", DisplayAndClear5);
spine.addEventListener("click", DisplayAndClear6);
			
function DisplayAndClear1() {
	{
		if (laserDescription.style.display == "none"){
			laserDescription.style.display = "block";
		}
		else {
			laserDescription.style.display = "none";
		};
	};
};

function DisplayAndClear2() {
	{
		if (chiroDescription.style.display == "none"){
			chiroDescription.style.display = "block";
		}
		else {
			chiroDescription.style.display = "none";
		};
	};
};

function DisplayAndClear3() {
	{
		if (physicalDescription.style.display == "none"){
			physicalDescription.style.display = "block";
		}
		else {
			physicalDescription.style.display = "none";
		};
	};
};

function DisplayAndClear4() {
	{
		if (massageDescription.style.display == "none"){
			massageDescription.style.display = "block";
		}
		else {
			massageDescription.style.display = "none";
		};
	};
};

function DisplayAndClear5() {
	{
		if (golfDescription.style.display == "none"){
			golfDescription.style.display = "block";
		}
		else {
			golfDescription.style.display = "none";
		};
	};
};

function DisplayAndClear6() {
	{
		if (spineDescription.style.display == "none"){
			spineDescription.style.display = "block";
		}
		else {
			spineDescription.style.display = "none";
		};
	};
};

