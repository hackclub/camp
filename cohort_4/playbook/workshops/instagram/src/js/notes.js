// The recieveSms function doesn't quote work yet so all of this code also is useless as of now

var Instagram = {}

function logMessage(phone, message) {
	var p = document.createElement("p");
	p.innerHTML = phone + ": " + message;

	document.body.appendChild(p)
}

function Instagram.initDb() {
	if (localStorage["phone-numbers"] === undefined) {
		var emptyObject = {};
		localStorage["phone-numbers"] = JSON.stringify(emptyObject);
	}
	var stringifiedObject = localStorage["phone-numbers"];
	Instagram.db.store = JSON.parse(stringifiedObject); // http://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/
}

function Instagram.db.reset() {
	localStorage.removeItem("phone-numbers"); // http://stackoverflow.com/questions/9943220/how-to-delete-a-localstorage-item-when-the-browser-window-tab-is-closed
}

function Instagram.db.add(phone) {
	Instagram.db.store[phone] = true;
	var stringifiedObject = JSON.stringify(Instagram.db.store); // http://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/
	localStorage["phone-numbers"] = stringifiedObject;
}

maestro.Twilio.recieveSms(function(sms){
	debugger

	var senderNumber = sms.From;
	var message = sms.Body;

	logMessage(senderNumber, message);
	Instagram.db.add(senderNumber);

	Object.keys(Instagram.db.store).forEach(function(key) { // http://stackoverflow.com/questions/684672/loop-through-javascript-object#answer-5737136
		var number = Instagram.db.store[key];
	    if (number !== senderNumber) {
	    	maestro.Twilio.sendSms(number, message);
	    }
	});
								
});