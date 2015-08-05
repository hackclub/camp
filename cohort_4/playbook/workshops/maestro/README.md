# TODO
- Google Voice

# STRUCTURE
- breadth first
- lengthier explanations at bottom of readme that specifically states that it is optional to read it for more clarification
- insert guiding questions

# Learning Javascript through Maestro

Our objective of this tutorial is to learn 
- the fundamentals of the programming language javascript
- the fundamentals of programing in general
- and how to send text messages and make phone calls with Maestro

## Sections

TODO

## Demo

- <!prank call>
- <!send friend txt>
- <!send pic based on feeling>
- <!send song based on pick>

## Questions you should be able to answer after this tutorial

*Just skim this list, we'll ask the questions after each section.*

**High level questions**

- What is JavaScript? Why do we use it?
- How do you add JavaScript to your html page?

**Questions about the fundamentals of programming.**

- What does it mean when I say "code executes in order"?
- What is a string in JavaScript?
- What is a function?
- What is a function's input?
- What is a function's output?
- What is a programming construct I can use to remember things in programming?
- How do I remember a function's output?
- How do I use a variable as a placeholder?
- What are some use cases of variables in programming?
- What programming construct

**Questions specifically about javascript in the web browser**

- In JavaScript, how do you make an alert box show up on the screen?
- In JavaScript, how do you ask a user for an input?

**Questions about how to use the Maestro library**

- How do I send a text message with Maestro?
- How do I make a phone call through Maestro?
- How do I send a multimedia message through Maestro?
- How do I play an mp3 file through Maestro?

## What is JavaScript

TODO: Description
TODO: Facebook Remove CSS Screenshot Demo

## Running your code in the console

## Fundamental Concepts in Javascript

Try all of these in the console.
Look at the stack.

```js
// anything listed after these two lines are ignored in the code
// therefore I an write as much stuff


// you can add two numbers together
1 + 2; 

// you can assign valaues to a variable

// in math class you did x = 1, in javascript you need to add "var and a semicolon"
var x = 1;
var y = 2;
x + y

// There are these things called strings. Anything inside of quotes.
"Hello"


"Hello" + "Jonathan"
"Hello " + "Jonathan"

var firstName = "jonathan"
"Hello " + firstName;

var greeting = "Hello ";
greeting + firstName;

greeting = "Goodbye ";
greeting + firstName;

firstName = "Sally"
greeting + firstName;

var message = greeting + firstName;

// the above is a function
alert("Hello world")

var message = "Hello, welcome to my website!";
alert(message)

var name = prompt("What is your name?");
alert("Hello " + name + ". Welcome to my website!");

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