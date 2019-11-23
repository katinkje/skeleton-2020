
// globals for speech recognition //
//tutorial: https://developers.google.com/web/updates/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API //


if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {

	var recognition = new webkitSpeechRecognition();
	
	recognition.continuous = false;
	recognition.interimResults = false;
	recognition.lang = "en-UK";

	// recognition.onstart = function() { ... }
	// recognition.onresult = function(event) { ... }
	// recognition.onerror = function(event) { ... }
	// recognition.onend = function() { ... }


	
	/* on start function */
	recognition.onstart = function() {

		document.getElementById('transcript').focus();
		document.getElementById("mic").classList.remove("off");
		document.getElementById("mic").classList.add("on");
		//showInfo('info_speak_now');
		//start_img.src = '/intl/en/chrome/assets/common//theme/skeleton-2020/images/content/mic-animate.gif';
		};
	
	/* on result */
	recognition.onresult = function(e) {
		var s =  e.results[0][0].transcript;
		document.getElementById('transcript').value = s; /*e.results[0][0].transcript;*/
		document.getElementById("mic").classList.remove("on");
		document.getElementById("mic").classList.add("off");
		recognition.stop();
		
		document.getElementById("quick-search").classList.remove("xselected");
		
		document.getElementById('fcsearch').submit(); /* Google search */
		
		//alert("submit search for keyword: " + s);
		};
	
	
	/* on eror */
	 recognition.onerror = function(e) {
        recognition.stop();
		document.getElementById("mic").classList.remove("on");
		document.getElementById("mic").classList.add("off");
		document.getElementById('transcript').value = "WTF?";
		//alert("on error");
      	};
	/* on end or stop function */
	recognition.onend = function() {	
		recognition.stop();
		document.getElementById("mic").classList.remove("on");
		document.getElementById("mic").classList.add("off");
		//alert("on end");
		};
	}



function startButton() {

		try {
		recognition.start();
		}
		catch(err) {
			try {
				recognition.stop();
			}
			catch(err) {
				console.log(err.message);
			}

			
		console.log(err.message);
		}

	document.getElementById('transcript').value = null;
	document.getElementById("quick-search").classList.remove("xselected");
	document.getElementById("quick-search").classList.add("xselected");	
	//alert("startButton");
	}

