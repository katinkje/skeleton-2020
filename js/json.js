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


//overige data gerelateerde functies//////////////////////////////






	function fetchNextItems (jsonrecordset) {
		
		for(var i=0; i < jsonrecordset.length;i++) {
			//alert(jsonrecordset[i].to_id + " " + jsonrecordset[i].to_contenttype);
			var surl = "/php/itemsbytype.php?from_id=" +  jsonrecordset[i].to_id + "&to_contenttype=" + jsonrecordset[i].to_contenttype;
			getData (surl, addItems); //getData (api/url, callback) (todo: add paging or other parameters to the API)
		};
		

	return false;
	}