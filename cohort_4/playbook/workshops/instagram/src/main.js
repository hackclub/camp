window.onload = function() {

  var button = document.getElementById('button');

  button.onclick = function() {
  	var photoUrl = prompt("Give us a URL of a photo you want to add to the stream!")

  	var img = document.createElement("img");
  	img.src = photoUrl // NEW CHANGE FOR DYNAMICALLY CHANGING PHOTOS

  	var parent = document.getElementById("header");
  	parent.appendChild(img);
  };


};

/*

objects have
- properties
- abilities

objects
- human
	- onwake
- room
	- findObjectById

*/


human.onsleep = function() {

	var alarm = room.findObjectById('alarm-clock');

	alarm.onWakeTime = function() {

	}

}

- when one thing happens
- make it so that some other thing will happen

======

- when an intruder comes in
- when they trip over the secondary alarm system

- when someone walks into the bathroom
- activate the second sensor



var elevator1 = building.getThingById("elevator-1");

elevator1.onButtonPress = function() {

	var panel = building.getThingById("elevator-1-panel")

	panel.onpress = function() {
		// figure out which button was pressed
	}


}





// human activities


async human activities

- when I get the feeling to poop
- when I get a phone call



jonathan.onwakeup = function() {

	var phone = jonathan.stuff.getItemById("jonathans-cell-phone");
	phone.turnOn();
	phone.setToVibrate();

	phone.onrecievecall = function() {
		phone.redirectCall
	}
}

var phone = world.getElementByObject("jonathan-leungs-phone");

phone.onring = function() {
	var 
}


- when something happens
	- when something else happens
		- ask something for a thing
		- add it to some other thing

- when you arrive at work
	- when you hear a knock on your door
		- ask them to take a message
		- grab a new piece of paper
		- and leave it in the message inbox

Kinkos

- when it is time for your store to open
	- phone disable default
	- when the phone rings
		- ask them what they want to order
		- grab a new piece of paper
		- leave it in a pile of papers for orders


- A Togo Coffee Shop

At the beginning of the day

var phone = room.getObjectById("main-phone");

// Alice runs a store

window.onload = function() {

  var button = document.getElementById('button');

  button.onclick = function() {
  	var photoUrl = prompt("Give us a URL of a photo you want to add to the stream!")

  	var img = document.createElement("img");
  	img.src = photoUrl // NEW CHANGE FOR DYNAMICALLY CHANGING PHOTOS

  	var parent = document.getElementById("header");
  	parent.appendChild(img);
  };


};



store has a magic room
	- you can create any THING you want when you tell it turnOn
	- you can find any THING like hermione granger when you ask for it

store.onopen = function() {

	var phone = document.getElementById('main-phone');

	phone.onring = function() {
		var spice = ask("Hi Welcome to spice coffee roasters. We make coffee, you choose the spice. What kind of spice would you like?");

		var coffee = room.createThing("coffee");
		coffee.spice = spice;

		var pickupArea = room.findThing("takeout-pickup-area");
		pickupArea.put(coffee);
	}

}

// v1 - what do you want to do when someone calls


phone
pickup-area

var spice = ask("Hi Welcome to spice coffee roasters. We make coffee, you choose the spice. What kind of spice would you like?");

var coffee = room.creatas("coffee");
coffee.spice = spice;

var pickupArea = room.accio("takeout-pickup-area");
pickupArea.put(coffee);

// v2 -  when do you want this to happen? when the phone rings!

var phone = room.accio('takeout-phone');

phone.onring = function() {
	var spice = ask("Hi Welcome to spice coffee roasters. We make coffee, you choose the spice. What kind of spice would you like?");

	var coffee = room.creatas("coffee");
	coffee.spice = spice;

	var pickupArea = room.accio("takeout-pickup-area");
	pickupArea.put(coffee);
}

// v3 - 

store.onopen = function() {

	phone.onring = function() {
		var spice = ask("Hi Welcome to spice coffee roasters. We make coffee, you choose the spice. What kind of spice would you like?");

		var coffee = room.creatas("coffee");
		coffee.spice = spice;

		var pickupArea = room.accio("takeout-pickup-area");
		pickupArea.put(coffee);
	}

}

- objects
	window
		.onload
	document
		f-create
		f-find
	button
		f-onclick
	img
		p-src
	image-container
		p.append

- functions
	- prompt
	

- prompt


Outline

=========


Explain that weve used HTML itself
Weve used js by itself

HTML is the things
	- images
	- headers
	- links
JS 
	- moves the things around
	- makes of them
	- and removes them

==========

Today
we want js to 

- ask us what image we want to add to the page
- and adds that image to the page

script
	- make analogy to image tag
	- perhaps make an analogy for this ()
	- youre giving things names

==========

// ask for what kind of spice you want



ask("What kind of spice?")
 






		var spice = ask("Hi Welcome to spice coffee roasters. We make coffee, you choose the spice. What kind of spice would you like?");

		var coffee = room.creatas("coffee");
		coffee.spice = spice;

		var pickupArea = room.accio("takeout-pickup-area");
		pickupArea.put(coffee);






// Define objects at the top
person.name 
person.age





// Define functions at the top


person.giveObject("cell-phone")


// say apple is another object

person.takeObject(apple);
// the person now has an apple
// 

person.walk
	// the action is the person ends up walking
	// 





// the only way to remember things in programming is with variables
// the only way for us to be able to use later, either to modify it, access things in javascript, a variable must point to it.
// in order for me to use anything in javascirpt, there must be variable that points to it


ask("What spice?")
// if you were the ask spice function
// I would give you the question "What spice?"
// and you would give me back whatever the person said
// and because I need to remember what the person said, I will remember it wiht a variable

var theNewSpice = ask("What spice?");


// make the coffee

var coffee = room.makeThing("coffee");
// 

// I'm going to say that coffee is an object
// if I were an object,
// I would 
// my name
// my age

person.name = "Jonathan"
person.age = 24

coffee.spice = theNewSpice;

// add the spice to the coffee

// put the coffee on the counter

// we made the coffeee, we need to put it on the counter
// before we can put it on the counter, we must find where the counter is

room.findThing("take-out-counter");

var pen = room.findThing("take-out-counter");

var takeOutCounter = room.findThing("take-out-counter");

// if a function gives something back to you, if you want to use it later, you must store it in a variable for later?
// I'll "store" the in a variable so I can access it later

takeOutCounter.
// just like a person can take money (this object, a counter, can "take" coffee)


takeOutCounter.hold(coffee)
// just like


var phone = room.find("take-out-phone");

phone.onring = function() {
	var spice = ask("Hi Welcome to spice coffee roasters. We make coffee, you choose the spice. What kind of spice would you like?");
	var coffee = room.creatas("coffee");
	coffee.spice = spice;
	var pickupArea = room.accio("takeout-pickup-area");
	pickupArea.put(coffee);
}

// phone is an object
// it has a property called on ring
// so I can say this property is equal to a function
// insdie of this function, it will have all the code that it needs to run when the phone rings
// whenever the phone rings, all of the code in the function runs


// I only want to do this stuff when the coffee shop is open

coffeeshop.onopen = function() {

	// when the coffee shop is open
	// I want to find the phone
	// and tell it tod do the phone to do all the things when it rings


	var phone = room.find("take-out-phone");

	phone.onring = function() {
		var name = ask("Hi Welcome to spice coffee roasters. We make coffee, you choose the spice. What kind of spice would you like?");
		var coffee = room.creatas("coffee");
		coffee.spice = spice;
		var pickupArea = room.accio("takeout-pickup-area");
		pickupArea.put(coffee);
	}

}

// do you see how it is inside

// let's walk through how this is ring

// say the coffee shop opens at 7am

// 6am
// 6:30
// 7am

// it finds the phone
//	// 398 runs
// then 400 runs
// 	when the phone rings
// 7:30am, has any code executed
//
// 8am, the phone rings
// what line of code is executed, it starts then 400 is executed, then through 405.












// getElementById, function, input and output 

// create

// ask


// room.accio (there's a thing for this but we'll get to it later)


















