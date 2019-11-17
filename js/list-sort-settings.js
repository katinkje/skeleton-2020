// JavaScript Document


	
	new Sortable(document.getElementById("list-1"), {
		group: "shared",  // or { name: "...", pull: [true, false, 'clone', array], put: [true, false, array] }

		
		//filter: "#type-filter, .item-desc, .item-title",
	
		swap: true, // Enable swap plugin
		swapThreshold: 0.5,
		
		multiDrag: true, // Enable multi-drag
		swapClass: "sortable-ghost", // The class applied to the hovered swap item
		ghostClass: "sortable-ghost",  // Class name for the drop placeholder
		selectedClass: "xselected",  // Class name for the selected item

		animation: 150
	
		});

	new Sortable(document.getElementById("list-2"), {
		group: "shared",  // or { name: "...", pull: [true, false, 'clone', array], put: [true, false, array] }
	
		//filter: "#type-filter, .item-desc, .item-title",
		
		swapThreshold: 0.1,
		multiDrag: true, // Enable multi-drag
		swapClass: "sortable-ghost", // The class applied to the hovered swap item
		ghostClass: "sortable-ghost",  // Class name for the drop placeholder
		selectedClass: "xselected",  // Class name for the selected item
		
		animation: 150

		
	
		});
