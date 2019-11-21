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

// code generator //
function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}