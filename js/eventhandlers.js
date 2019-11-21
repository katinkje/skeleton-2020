// JavaScript Document



function resetScreen (e) {
//var el = e.currentTarget; //element with the handler attached
location.reload(true)	
//alert("reset screen (home)");
}



function refreshScreen (e) {
var el = e.currentTarget; //element with the handler attached

		//refresh
		deleteItemsFromList("list-1");
		getItems();

return false;
}

function  getItems () {
			//repeat. get new data
		
		var url = basepath + "php/basicgetitem.php?type=" + paging.activetype + "&limit=" + paging[paging.activetype] + "," + paging.itemsperpage; //Set from_id to 0 to retrieve all; todo: enable paging
		//alert(url);
		getData (url, addItems); //getData (api/url, callback) (todo: add paging or other parameters to the API)
return false;
}



function previousItems (e) {
//var el = e.currentTarget; //element with the handler attached

	if (paging[paging.activetype] > 0) {
		paging[paging.activetype] = paging[paging.activetype] -1;
	} else {
		paging[paging.activetype] = 0;
	}
	
//refresh
deleteItemsFromList("list-1");
getItems();
//alert("previous items: " + paging[paging.activetype] );
return false;
}




function nextItems (e) {
//var el = e.currentTarget; //element with the handler attached

	//if (paging[paging.activetype] > 0) {
		paging[paging.activetype] = paging[paging.activetype] + 1;
	//} else {
	//	paging[paging.activetype] = 0;
	//}
	//refresh
deleteItemsFromList("list-1");
getItems();
//alert("next items: " + paging[paging.activetype] );
return false;
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