# Easier Functions
*(functions that don't have callbacks)*

## sendSms
Send a text message to any phone number.

```js
maestro.Twilio.sendSms("484-555-5555", "Yo, what's up?");
//=> Send an text message to the phone  "484-555-5555" with the message "Yo, what's up?"

maestro.Twilio.sendSms("415-555-5555", "What's your order?");
//=> Send an text message to the phone "415-555-5555" with the message "What's your order?"
```
[![](https://i.imgur.com/UXVkpCb.png)](http://jsbin.com/xofila/1/edit?js,console)

## sendMms
Send a picture to any phone number (with a multi-media message)

```js
maestro.Twilio.sendMms("484-555-5555", "https://i.imgur.com/gptoCGu.jpg");
//=> Send an MMS to the phone "484-555-5555" with the image of this cat "https://i.imgur.com/gptoCGu.jpg".

maestro.Twilio.sendMms("415-555-5555", "https://i.imgur.com/VnGB2ij.png");
//=> Send an MMS to the phone "415-555-5555" with the image of this dog "https://i.imgur.com/VnGB2ij.png".
```

[![](https://i.imgur.com/UXVkpCb.png)](http://jsbin.com/xofila/2/edit?js,console)

## callAndSay

```js

maestro.Twilio.callAndSay("415-555-5555", "Help! I am trapped in a fortune cookie factory!");
//=> Call "415-555-5555" and say over the phone 'Help! I am trapped in a fortune cookie factory!'".

maestro.Twilio.callAndSay("484-555-5555", "Yo, yo , yo, I'm learning to rap! WITH CODE!");
//=> Call "484-555-5555" and say over the phone 'Yo, yo , yo, I'm learning to rap! WITH CODE!'".
```

[![](https://i.imgur.com/UXVkpCb.png)](http://jsbin.com/xofila/4/edit?js,console)

###callAndPlay

```js
maestro.Twilio.callAndPlay("415-555-5555", "http://a.tumblr.com/tumblr_lnzkskqchW1qfhzsvo1.mp3");
//=> Call "+1-415-555-5555" and play this mp3 file over the phone "http://a.tumblr.com/tumblr_lnzkskqchW1qfhzsvo1.mp3".

maestro.Twilio.callAndPlay("484-555-5555", "http://hazzardweb.net/wp-content/uploads/RickRoll/RickRoll.mp3");
//=> Call "+1-484-555-5555" and play this mp3 file over the phone "http://hazzardweb.net/wp-content/uploads/RickRoll/RickRoll.mp3".
```

[![](https://i.imgur.com/UXVkpCb.png)](http://jsbin.com/xofila/5/edit?js,console)

# Harder Functions
--

*(functions that have callbacks)*

## Giphy

### findFirst
```js
var printFirstGiphy = function (response) {
    console.log(response);
}

maestro.Giphy.findFirst("Search text", printFirstGiphy);
```

###recieveSms
```
maestro.Twilio.recieveSms("twilio-number",function(reply){
  console.log(reply.from); //prints the number that sent a message to twilio-number

    });
```

###recieveCall

```js
var printCallerPhoneNumber = function (call){
  console.log(call.from);
}

maestro.Twilio.recieveCall("2016694352",twiml, printCallerPhoneNumber);
```

###twiml
```
var twiml = maestro.Twilio.twiml(); //create a blank twiml object

twiml.say("Hello World"); //Say Hello World
twiml.pause(3); //Pause for 3 seconds
twiml.play("http://here-and-now.info/audio/rickastley_artists.mp3"); //play "never gonna give you up"

//or alternatively
twiml.say("Hello World").pause(3).play("http://here-and-now.info/audio/rickastley_artists.mp3");
```

## call
```
maestro.Twilio.call("human-number",twiml);
```
