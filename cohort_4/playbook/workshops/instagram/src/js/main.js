var Instagram = Instagram || {};

Instagram.writePhone = function(phone) {
	var phones = document.getElementById("phones");
	var p = document.createElement("p");
	p.innerHTML = phone;
	phones.appendChild(p)
}

Instagram.writeImage = function(imageUrl) {
	var images = document.getElementById("images");
	var img = document.createElement("img");
	img.src = imageUrl;
	images.appendChild(img);
}

Instagram.initDweetListening = function() {
	dweetio.listen_for("hackedu-instagram-photo-urls", function(dweet){
		Instagram.writeImage(dweet.content.imageUrl)
	});
}

Instagram.onFileUpload = function(imgurUrl) {
	alert("file uploaded!")

	dweetio.dweet_for("hackedu-instagram-photo-urls", {imageUrl: imgurUrl}, function(err, dweet){ // https://github.com/buglabs/dweetio-client
	    console.log(dweet.thing, dweet);
	});


	Object.keys(Instagram.db.store).forEach(function(phone) { // http://stackoverflow.com/questions/684672/loop-through-javascript-object#answer-5737136
		maestro.Twilio.sendMms(phone, imgurUrl);	
	});
}

Instagram.initPhoneInput = function () {
	var phoneForm = document.getElementById("phone-form");
	phoneForm.onsubmit = function(e) {
		e.preventDefault();
		var phoneInput = document.getElementById("phone-input");
		var newPhone = phoneInput.value;
		var added = Instagram.db.add(newPhone);
		if (added === false) {
			alert("Oops, the phone number " + newPhone + " is already in our databases");
		}

		phoneInput.value = "";
	}
}

Instagram.initFileUpload = function(){
		// https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications
	var inputElement = document.getElementById("cameraInput");
	
	function handleFiles() {
		var fileList = this.files; /* now you can work with the file list */
		var file = fileList[0];
		Imgur.upload(file, Instagram.onFileUpload);
	}

	inputElement.addEventListener("change", handleFiles, false);
}

Instagram.main = function() {
	Instagram.initDb();

	Instagram.initPhoneInput();
	Instagram.initFileUpload();
	Instagram.initDweetListening();
}

Instagram.main();