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
	//var typeimage = "url('//theme/skeleton-2020/images/" + bylabel + ".svg')";
	//document.documentElement.style.setProperty('--type-image', typeimage);
	//console.log("to do, swap image for this one: " + bylabel);
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
