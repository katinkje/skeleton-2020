// JavaScript Document //




function toggleType(bycoll, bylabel,bycolorcode) {
var containerElement = document.getElementById(bycoll); // Get the container element
var typeDesc = document.getElementById(bycoll  + '-desc'); // Get the element to display a litte extra help
var btns = containerElement.getElementsByTagName("button");	// Get all buttons inside the container
	
	for (var i = 0; i < btns.length; i++) {
		btns[i].classList.remove("active");
	}
	document.getElementById(bylabel).classList.add("active");
	document.documentElement.style.setProperty('--type-color', bycolorcode);
	document.documentElement.style.setProperty('--type-label', bylabel);
	typeDesc.innerHTML = "<h2>#" + bylabel + "</h2>";
	paging.activetype = bylabel; //set global variable
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
