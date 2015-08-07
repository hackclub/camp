var Instagram = {}

function logMessage(phone, message) {
	var p = document.createElement("p");
	p.innerHTML = phone + ": " + message;

	document.body.appendChild(p)
}

function initDb() {
	if (localStorage["phone-numbers"] === undefined) {
		var emptyObject = {};
		localStorage["phone-numbers"] = JSON.stringify(emptyObject);
	}
	var stringifiedObject = localStorage["phone-numbers"];
	Instagram.db = JSON.parse(stringifiedObject); // http://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/
}

function resetDb() {
	localStorage.removeItem("phone-numbers"); // http://stackoverflow.com/questions/9943220/how-to-delete-a-localstorage-item-when-the-browser-window-tab-is-closed
}

function writeToDb(phone) {
	Instagram.db[phone] = true;
	var stringifiedObject = JSON.stringify(Instagram.db); // http://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/
	localStorage["phone-numbers"] = stringifiedObject;
}

maestro.Twilio.recieveSms(function(sms){
	debugger

	var senderNumber = sms.From;
	var message = sms.Body;

	logMessage(senderNumber, message);
	writeToDb(senderNumber);

	Object.keys(Instagram.db).forEach(function(key) { // http://stackoverflow.com/questions/684672/loop-through-javascript-object#answer-5737136
		var number = Instagram.db[key];
	    if (number !== senderNumber) {
	    	maestro.Twilio.sendSms(number, message);
	    }
	});
								
});

// https://hacks.mozilla.org/2011/03/the-shortest-image-uploader-ever/comment-page-1/
function upload(file, callback) {
 
  // file is from a <input> tag or from Drag'n Drop
  // Is the file an image?
 
  if (!file || !file.type.match(/image.*/)) return;
 
  // It is!
  // Let's build a FormData object
 
  var fd = new FormData();
  fd.append("image", file); // Append the file
  fd.append("key", "6528448c258cff474ca9701c5bab6927");
  // Get your own key: http://api.imgur.com/
 
  // Create the XHR (Cross-Domain XHR FTW!!!)
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://api.imgur.com/2/upload.json"); // Boooom!
  xhr.onload = function() {
    // Big win!
    // The URL of the image is:
    var response = JSON.parse(xhr.responseText);
    var links = response.upload.links;
    var imageUrl = links.original

    callback(imageUrl);
   }
   // Ok, I don't handle the errors. An exercice for the reader.
   // And now, we send the formdata
   xhr.send(fd);
 }


function main() {
	initDb();

	// https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications
	var inputElement = document.getElementById("cameraInput");
	inputElement.addEventListener("change", handleFiles, false);
	function handleFiles() {
	  var fileList = this.files; /* now you can work with the file list */
	  var file = fileList[0];
	  upload(file, function(imageUrl) {
	  	maestro.Twilio.sendMms("610-761-0083", imageUrl);
	  });
	}
}

main();