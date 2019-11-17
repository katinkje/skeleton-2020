// JavaScript Document



function resetScreen (e) {
var el = e.currentTarget; //element with the handler attached
	
alert("reset screen (home)");
}

function refreshScreen (e) {
var el = e.currentTarget; //element with the handler attached
	
alert("refresh screen");
}



function previousItems (e) {
var el = e.currentTarget; //element with the handler attached
	
alert("previous items");
}




function nextItems (e) {
var el = e.currentTarget; //element with the handler attached
	
alert("next items");
}



function deleteItems (e) {
var el = e.currentTarget; //element with the handler attached
	
alert("delete items");
}

function saveItems (e) {
var el = e.currentTarget; //element with the handler attached
	
alert("save items");
}



function showDetails (e) {
var el = e.currentTarget; //element with the handler attached
var show = false;
	
	//if (el.classList.contains("featured")) {
	//	show=true;
	//}
	//if (el.classList.contains("button") && el.classList.contains("xselected")) {
	//	show=true;
	//}
	
	//if ((el.classList.contains("featured")) || (( el.classList.contains("button")) && (el.classList.contains("xselected"))))  {

	//if(show) {
		$("#list-1 > li.item-desc").html($(el).find(".item-desc").html());
		$("#list-1 > li.item-title").html($(el).find(".item-title").html());
	//}
	//}
}



function toggleSize (e) {
var el = e.currentTarget; //element with the handler attached

	if (el.classList.contains("featured")) {
		el.classList.toggle("featured"); //remove featured class
	} else {
		var coll = document.getElementsByClassName('featured');
		if (coll) {
			for (listitem of coll) {
			listitem.classList.toggle("featured");
			}
		}
		el.classList.toggle("featured");
	}
//alert(el.classList);
}