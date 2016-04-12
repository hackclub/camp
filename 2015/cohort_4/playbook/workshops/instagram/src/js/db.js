var Instagram = Instagram || {};

Instagram.initDb = function() {
	Instagram.db = {};

	Instagram.db.init = function() {
		if (localStorage["phone-numbers"] === undefined) {
			var emptyObject = {};
			localStorage["phone-numbers"] = JSON.stringify(emptyObject);
		}
		var stringifiedObject = localStorage["phone-numbers"];
		Instagram.db.store = JSON.parse(stringifiedObject); // http://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/

		Object.keys(Instagram.db.store).forEach(function(phone) { // http://stackoverflow.com/questions/684672/loop-through-javascript-object#answer-5737136
			Instagram.db.onAdd(phone);
		});
	}

	Instagram.db.add = function(phone) {
		if (Instagram.db.store[phone]) {
			return false
		}
		else {
			Instagram.db.store[phone] = true;
			var stringifiedObject = JSON.stringify(Instagram.db.store); // http://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/
			localStorage["phone-numbers"] = stringifiedObject;
			Instagram.db.onAdd(phone);

			return true;
		}
	}

	Instagram.db.onAdd = function(phone) {
		Instagram.writePhone(phone);
	}

	Instagram.db.reset  = function() {
		localStorage.removeItem("phone-numbers"); // http://stackoverflow.com/questions/9943220/how-to-delete-a-localstorage-item-when-the-browser-window-tab-is-closed
		Instagram.initDb();
	}

	Instagram.db.init();
}

