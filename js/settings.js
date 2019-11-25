// JavaScript Document

// globals, todo: convert all code to objects//
	

	var basepath = "/theme/skeleton-2020/";

	

	var itemAnimations = new Array("fade-up", "fade-down", "fade-left", "fade-right", "fade-up-right", "fade-up-left", "fade-down-right", "fade-down-left", "zoom-in", "zoom-in-up", "zoom-in-down", "zoom-in-left", "zoom-in-right", "zoom-out", "zoom-out-up", "zoom-out-down", "zoom-out-left", "zoom-out-right", "slide-up", "slide-down", "slide-right", "slide-left","flip-left", "flip-right", "flip-up", "flip-down");

	var itemImages = new Array(
		"fallback/haal-4456.jpg",
		"fallback/haal-dsc-4415.jpg",
		"fallback/haal-dsc-4419.jpg",
		"fallback/haal-dsc-4551.jpg",
		"fallback/haal-dsc-4583.jpg",
		"fallback/haal-dsc-4585.jpg",
		"fallback/haal-dsc-4590.jpg",
		"fallback/haal-dsc-4609.jpg",
		"fallback/sagz-dsc-4600.jpg");


	
//we keep track of page number last shown of a particular type of tile //
	var paging = {

			inspirations: 0, 
			hardware: 0, 
			pages: 0,  
			field: 0, 
			expertise: 0,  
			location: 0,  
			course: 0,  
			organisation: 0, 
			hanze:0,
			activetype : "inspirations",
			itemsperpage: 6
			};
