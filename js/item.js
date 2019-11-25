// JavaScript Document


function addItems (jsonrecordset) {
var list = document.getElementById("list-1"); //oops, hardcoded value. refactor.

if (list) {	
	
	for(var i=0; i < jsonrecordset.length;i++) {
	var newitem = createItem(jsonrecordset[i]);
		list.append(newitem); // append / prepend / insertBefore / insertAfter
		//alert("item: " + newitem.id + " created");	
		}
	
	//alert(list.lastChild.id);
	//list.lastChild.classList.add('featured'); //sort datepunblished descending zodat het meeste recente item, het featured item is.
	//list.lastChild.classList.add('xselected'); 
	
}
return false;
}


function addRelatedItems (jsonrecordset) {
//var list = document.getElementById("list-1"); //oops, hardcoded value. refactor.

//if () {	
	deleteItemsFromList("list-1");
	for(var i=0; i < jsonrecordset.length;i++) {
		
		
		var url = basepath + "php/basicgetitem.php?id=" + jsonrecordset[i].item_id + "&type=" + jsonrecordset[i].content_type
		
		getData (url, addItems);
	//alert(i);
		//var newitem = createItem(jsonrecordset[i]);
		//list.append(newitem); // append / prepend / insertBefore / insertAfter
		//alert("item: " + newitem.id + " created");	
		//}
	
	//alert(list.lastChild.id);
	//list.lastChild.classList.add('featured'); //sort datepunblished descending zodat het meeste recente item, het featured item is.
	//list.lastChild.classList.add('xselected'); 
	
	}
return false;
}





function deleteItemsFromList(list) {
var list = document.getElementById(list);
var buttonlist =	document.createElement('ul');
	
	while (list.hasChildNodes()) { 
	//if(list.firstChild.classList) {
		if ((list.firstChild.classList) && ((list.firstChild.classList.contains("button")) ||(list.firstChild.classList.contains("featured")))) {
			//alert(list.firstChild.classList);
			buttonlist.appendChild(list.firstChild);
		} else {
			list.removeChild(list.firstChild);
		}
	//}
	}
	
	while (buttonlist.hasChildNodes()) { 
		list.appendChild(buttonlist.firstChild);
	}
	
}

function createItem(itemdata) {

	var scrollanimation = getAnimation(); //haal een random animatie style op voor scroll-effect, toevoegen en verwijderen.
	var fallback_image = getImage(); //haal een random demo image op.
	var getrelatedapi = "";

	
	var item =	document.createElement('li');
		item.setAttribute('id', itemdata.item_id); //pass straight from recordset
		item.classList.add('tile');
		item.classList.add(itemdata.content_type);
		item.setAttribute('content-type', itemdata.content_type);
		item.setAttribute('data-aos', scrollanimation);
		item.setAttribute('data-aos-duration', 500);	
		item.addEventListener('dblclick', toggleSize);

		item.addEventListener('click', showDetails);
	


	var flipcard = document.createElement('div');
		flipcard.classList.add('thecard');
		flipcard = item.appendChild(flipcard); //add the flipcard container
	
	var front = document.createElement('div');
		front.classList.add('thefront');
		front.setAttribute('style', validateimage(itemdata.item_image, fallback_image));
	
	var back = document.createElement('div');
		back.classList.add('theback');
		//back.setAttribute('style', validateimage(itemdata.item_image, fallback_image));
	
	
	var code = document.createElement('div');
		code.classList.add('item-code');
		code.innerHTML = "<h2>#" + generatePassword() + "</h2>";
	
		back.appendChild( code);
	
		flipcard.appendChild(front)
		flipcard.appendChild(back)
	
		item.appendChild( flipcard );
		
	var title = document.createElement('div');
		title.classList.add('item-title');
		title.innerHTML = "<h2>" + itemdata.item_title + "</h2>";
		
		//front.appendChild( title );
	
		item.appendChild( title );
			
	var desc = document.createElement('div');
		desc.classList.add('item-desc');
		desc.innerHTML = itemdata.item_desc;
		
		//front.appendChild( desc );
		item.appendChild( desc );
	

return item;
}



function getImage() {
	var index =Math.floor(Math.random() * itemImages.length);
	//var bgImage = "background-image: url('" + basepath + itemImages[index] + "');";
	var bgImage = itemImages[index];
return bgImage;
}


function getAnimation() {
	var index =Math.floor(Math.random() * itemAnimations.length);
	var animation = itemAnimations[index];

return animation;
}


function validateimage(itemimage, fallbackimage) {
var bgimage = fallbackimage;


	
	if (itemimage) {
		var s = JSON.parse(itemimage).file;
		//var pos = s.lastIndexOf(".");
		//s = s.substring(0, pos);
		//s = s + ".webp";
		//alert(s);
		//var bgimage = "background-image: url('/images/" + s + "');";

		bgimage = s;	
	}
	
bgimage = "background-image: url('" + basepath + 'images/pictures/' + bgimage + "');";
//alert(bgimage);
return bgimage;
}






