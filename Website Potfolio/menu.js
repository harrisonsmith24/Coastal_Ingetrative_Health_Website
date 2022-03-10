"use strict";

var subMenu = document.getElementById("subMenu");

function DisplayMenu(){
	if ( subMenu.style.display == "none"){
		subMenu.style.display = "block";
	} 
	else {
		subMenu.style.display = "none";		
	};
};