// JavaScript Document

function getData (surl, callback) {
//alert(surl);	
		$.ajax({
			url: surl,
			method: 'GET',
			dataType: 'json',
			success: callback,
			error: function(request, error) {
				console.log(arguments);
				console.log(" Can't do because: " + error);
			},
			timeout: 3000 //to do: research and develop further in combination with error handling
			});
		return false;
		}


function  getItems () {
var url = basepath + "php/basicgetitem.php?type=" + paging.activetype + "&limit=" + paging[paging.activetype] + "," + paging.itemsperpage;

	getData (url, addItems);

return false;
}


function  getRelations (el) {
	
var itemid = el.id;
var contenttype = el.getAttribute('content-type');	

	
var url = basepath + "php/basicgetrelated.php?id=" + itemid + "&type=" + contenttype; 

	getData (url, addRelatedItems); //getData (api/url, callback) (todo: add paging or other parameters to the API)

return false;
}
