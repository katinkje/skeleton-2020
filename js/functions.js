// JavaScript Document //




function toggleType(bycoll, bylabel,bycolorcode) {
var containerElement = document.getElementById(bycoll); // Get the container element
var btns = containerElement.getElementsByTagName("button");	// Get all buttons inside the container
	
	for (var i = 0; i < btns.length; i++) {
		btns[i].classList.remove("active");
	}
	document.getElementById(bylabel).classList.add("active");
	document.documentElement.style.setProperty('--type-color', bycolorcode);
	document.documentElement.style.setProperty('--type-label', bylabel);
	activetype = bylabel; //set global variable
return false;
}



// Toggles //

function mtoggleClass(el, classname){
	
	if (el.classList.contains(classname)) {
		el.classList.remove(classname);
	} else {
		el.classList.add(classname);
	}
}
