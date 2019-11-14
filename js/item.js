// JavaScript Document



function addItems (jsonrecordset) {
var list = document.getElementById("list-1"); //oops, hardcoded value. refactor.

if (list) {	
	
	for(var i=0; i < jsonrecordset.length;i++) {
	var newitem = createItem(jsonrecordset[i]);
		list.append(newitem); // append / prepend / insertBefore / insertAfter
		//alert("item: " + newitem.id + " created");	
		}
}
return false;
}


function createItem(itemdata) {

	var scrollanimation = getAnimation(); //haal een random animatie style op voor scroll-effect, toevoegen en verwijderen.
	var fallback_image = getImage(); //haal een random demo image op.


	
	var item =	document.createElement('li');
		item.setAttribute('id', itemdata.item_id); //pass straight from recordset
		item.classList.add('tile');
		//item.classList.add(jsonrecord.contenttype);
		item.setAttribute('data-aos', scrollanimation);
		item.setAttribute('data-aos-duration', 500);
	
		item.addEventListener('dblclick', toggleSize);
		item.addEventListener('click', showDetails);
		item.addEventListener('hover', showDetails);
		//item.addEventListener('dblclick', getrelatedtypes(itemdata.item_id)); //double click an item tile to insert or reveal associated content types


	var flipcard = document.createElement('div');
		flipcard.classList.add('thecard');
		flipcard = item.appendChild(flipcard); //add the flipcard container
	
	var front = document.createElement('div');
		front.classList.add('thefront');
	
	var back = document.createElement('div');
		back.classList.add('theback');
		back.setAttribute('style', validateimage(itemdata.item_image, fallback_image));
		
		flipcard.appendChild(front)
		flipcard.appendChild(back)
	
		item.appendChild( flipcard );
		
	var title = document.createElement('div');
		title.classList.add('item-title');
		title.innerHTML = "<h2>" + itemdata.item_title + "</h2>";
		
	
		item.appendChild( title );
			
	var desc = document.createElement('div');
		desc.classList.add('item-desc');
		desc.innerHTML = itemdata.item_desc;
		
	
		item.appendChild( desc );
	

return item;
}




//function addItems (jsonrecordset) {
//alert("in add item");
	
	//var elBefore= document.getElementById(insertbeforeitem); //global var declared in settings
	//var list = elBefore.parentElement;
	//var nextid =0;
	//var s = "";
	
	
		//for(var i=0; i < jsonrecordset.length;i++) {
			
		//	var index =Math.floor(Math.random() * itemAnimations.length);
		//	var animation = itemAnimations[index];
			
			//add a check for image or video and supply a default
			
		//	var index =Math.floor(Math.random() * itemImages.length);
		//	var backgroundimage = "background-image: url('" + itemImages[index] + "');";
			
			//END image / video check
		//	if (nextid != jsonrecordset[i].item_id) {
		//		var newItem = createItem(jsonrecordset[i], animation, backgroundimage);
		//		list.insertBefore(newItem, elBefore);
		//		s = (jsonrecordset[i].item_tocontenttype) + "," + (jsonrecordset[i].total_of_type);
		//		
		//		}
		//	 else {
		//		s = s + "#" + (jsonrecordset[i].item_tocontenttype) + "," + (jsonrecordset[i].total_of_type);
				
		//	}
		//	newItem ? newItem.setAttribute('to_contenttype', s) : newItem;
		//	nextid = jsonrecordset[i].item_id;
			
		
			//newItem.setAttribute('to_contenttype', s);
				
		//}

	//return false;
	//}


function getImage() {
	var index =Math.floor(Math.random() * itemImages.length);
	var bgImage = "background-image: url('" + basepath + itemImages[index] + "');";

return bgImage;
}


function getAnimation() {
	var index =Math.floor(Math.random() * itemAnimations.length);
	var animation = itemAnimations[index];

return animation;
}


function validateimage(itemimage, fallbackimage) {
	
//	if (!itemimage) {
		//var bgimage = fallbackimage;
//	} else {
//		var s = JSON.parse(itemimage).file;
//		var pos = s.lastIndexOf(".");
//			s = s.substring(0, pos);
//			s = s + ".webp";
//			//alert(s);
//		var bgimage = "background-image: url('/images/" + s + "');";
		//alert(bgimage);
//	}
		
//return bgimage;
return fallbackimage;
}



function createType(id, type, numberoftype, scrollanimation, bgimage) {
	
	var item =	document.createElement('li');
	
	
	
	item.setAttribute('from_id', id); //pass straight from recordset
	item.classList.add('grid-item');
	item.classList.add('type');
	item.classList.add(type);
	item.setAttribute('data-aos', scrollanimation);
	item.setAttribute('data-aos-duration', 500);
	
	item.addEventListener('dblclick', getrelateditems(id,type)); //double click an item tile to insert or reveal associated content types
	
	//item.setAttribute('to_contenttype', "");
	
	
	
	var flipcard = document.createElement('div');
		flipcard.classList.add('flip-card-container');
		flipcard = item.appendChild(flipcard); //add the flipcard container
	
	
	//var front = document.createElement('div');
		//front.classList.add('flip-card-front');
		//front.classList.add(type);
		//front.setAttribute('style', bgimage);
		//flipcard.appendChild(front)
	
	var back = document.createElement('div');
		back.classList.add('flip-card-back');
		back.setAttribute('style', bgimage);
	
		flipcard.appendChild(back)
		
		var text = document.createTextNode(numberoftype);
		back.appendChild( text );
	
	

	return item;
	}





