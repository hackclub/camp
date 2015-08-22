alert("Hello world")

var message = "Hello, welcome to my website!";
alert(message)

// this is starting to get unweildy, I don't want to retype all of this every time.

```

## Adding Javascript to an HTML web page

## How do we add JavaScript to an HTML page

I can follow along with debugger

```js

//=========================================
// I do

var name = prompt("What is your name?");
alert("Hello " + name + ". Welcome to my website!");


//=========================================
// I do

// 

var name = prompt("What is your name?");
var message = "Hello " + name + ". Welcome to my website!";
alert(message);

//=========================================
// CHALLENGE

// TODO: Something Similar

var answer = prompt("What is the meaning of life?");
var message = "Wrong. The meaining of life is not " + answer ". The answer is clearly 42.";
alert(answer);

//=========================================
//  Setup Maestro


//=========================================
// 


maestro.Twilio.callAndSay("610-761-0083", "Why did the refrigerator cross the road?");

var phone = prompt("What is the phone number you want to prank call?")
maestro.Twilio.callAndSay(phone, "Why did the refrigerator cross the road?");

var phone = prompt("What is the phone number you want to prank call?")
var prank = prompt("How does the prank go?")
maestro.Twilio.callAndSay(phone, prank);


//=========================================
// 

maestro.Twilio.sendMessage
//=========================================
// Challenge
// Read the documentation and try to figure out how to ask for a phoen number and a message and send a text message to a phone number

//=========================================
// I'm going to build this thing that texts you if you type something in (it's the fastest)


- chill
    - yo, lets go out.
- posh
    - Dear sir or maam, I would like to cordially invite you on a tea escade in the gardens of golden gate park.
- straight forward
    - I like you. You like me. Lets go out.
- generic
    - Hello. My summer camp is forcing me to ask you on a date with you.

//=========================================
// Challenge:
// Build an app that asks the person how they're feeling and based on what they say, sends an apprppriate image to them.

```
