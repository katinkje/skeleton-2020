// JavaScript Document

//globals //
	

	var basepath = "/theme/skeleton-2020/";
	var additemstoList ="aos-demo";
	var insertbeforeitem ="insert-before";
	var deleteafteritem="delete-after";
	var currentpage = 0;
	var itemsperpage = 12;
	var activetype = "inspirations";

	

	var itemAnimations = new Array("fade-up", "fade-down", "fade-left", "fade-right", "fade-up-right", "fade-up-left", "fade-down-right", "fade-down-left", "zoom-in", "zoom-in-up", "zoom-in-down", "zoom-in-left", "zoom-in-right", "zoom-out", "zoom-out-up", "zoom-out-down", "zoom-out-left", "zoom-out-right", "slide-up", "slide-down", "slide-right", "slide-left","flip-left", "flip-right", "flip-up", "flip-down");

	var itemImages = new Array(
		"/demo/haal-4456.jpg",
		"/demo/haal-dsc-4415.jpg",
		"/demo/haal-dsc-4419.jpg",
		"/demo/haal-dsc-4551.jpg",
		"/demo/haal-dsc-4590.jpg",
		"/demo/haal-dsc-4609.jpg");