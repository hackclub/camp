###sendSms
Send a text message to any phone number

```js
maestro.Twilio.sendSms("484-555-5555", "Yo, what's up?");
//=> Send an text message to the phone  "484-555-5555" with the message "Yo, what's up?"

maestro.Twilio.sendSms("415-555-5555", "What's your order?");
//=> Send an text message to the phone "415-555-5555" with the message "What's your order?"
```
This lets you send an sms (text-message) to a phone number.

###sendMms
Send a picture to any phone number (with a multi-media message)

```js
maestro.Twilio.sendMms("484-555-5555", "http://i.imgur.com/gptoCGu.jpg");
//=> Send an MMS to the phone "484-555-5555" with the image of this cat "http://i.imgur.com/gptoCGu.jpg".

maestro.Twilio.sendMms("415-555-5555", "http://i.imgur.com/VnGB2ij.png");
//=> Send an MMS to the phone "415-555-5555" with the image of this dog "http://i.imgur.com/VnGB2ij.png".
```

###recieveSms
```
maestro.Twilio.recieveSms("twilio-number",function(reply){
  console.log(reply.from); //prints the number that sent a message to twilio-number

    });
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

###call
```
maestro.Twilio.call("human-number",twiml);
```

###callAndSay

****IMPORTANT**, make sure to add "+1" in front of the phone number. So instead of "484-555-5555", write "+1-484-555-5555" or else it won't work.**

```js

maestro.Twilio.callAndSay("+1-415-555-5555", "Help! I am trapped in a fortune cookie factory!");
//=> Call "415-555-5555" and say over the phone 'Help! I am trapped in a fortune cookie factory!'".

maestro.Twilio.callAndSay("+1-484-555-5555", "Yo, yo , yo, I'm learning to rap! WITH CODE!");
//=> Call "484-555-5555" and say over the phone 'Yo, yo , yo, I'm learning to rap! WITH CODE!'".
```


###callAndPlay

****IMPORTANT**, make sure to add "+1" in front of the phone number. So instead of "484-555-5555", write "+1-484-555-5555" or else it won't work.**

```js
maestro.Twilio.callAndPlay("+1-415-555-5555", "http://a.tumblr.com/tumblr_lnzkskqchW1qfhzsvo1.mp3");
//=> Call "+1-415-555-5555" and play this mp3 file over the phone "http://a.tumblr.com/tumblr_lnzkskqchW1qfhzsvo1.mp3".

maestro.Twilio.callAndPlay("+1-484-555-5555", "http://hazzardweb.net/wp-content/uploads/RickRoll/RickRoll.mp3");
//=> Call "+1-484-555-5555" and play this mp3 file over the phone "http://hazzardweb.net/wp-content/uploads/RickRoll/RickRoll.mp3".
```

###recieveCall

```js
var printCallerPhoneNumber = function (call){
  console.log(call.from);
}

maestro.Twilio.recieveCall("2016694352",twiml, printCallerPhoneNumber);
```
## Giphy
### search
```js
var printGiphyResponse = function (response) {
    console.log(response);
}

maestro.Giphy.search("Search text", printGiphyResponse);
```
### findFirst
```js
var printFirstGiphy = function (response) {
    console.log(response);
}

maestro.Giphy.findFirst("Search text", printFirstGiphy);
```
