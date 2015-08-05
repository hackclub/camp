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
- and how to send text messages and make phone calls with Maestro using javascript.

## Sections

TODO

## Demo

- [Prank call](https://cdn.rawgit.com/hackedu/hack-camp/cb7a18c7e7bff6458d33be650de70186eb225f37/cohort_4/playbook/workshops/maestro/src/examples/prank/index.html)
- [Send a text](https://cdn.rawgit.com/hackedu/hack-camp/cb7a18c7e7bff6458d33be650de70186eb225f37/cohort_4/playbook/workshops/maestro/src/examples/send_sms/index.html)
- [Send a photo](https://cdn.rawgit.com/hackedu/hack-camp/cb7a18c7e7bff6458d33be650de70186eb225f37/cohort_4/playbook/workshops/maestro/src/examples/feeling/index.html)
- [Send a song](https://cdn.rawgit.com/hackedu/hack-camp/cb7a18c7e7bff6458d33be650de70186eb225f37/cohort_4/playbook/workshops/maestro/src/examples/song/index.html)

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

JavaScript is the programming language that runs in every web browser.

HTML & CSS are responsible for the data, look and the feel of the website.

For any interactivity on a page (things popping up, things that are changing on the page), JavaScript is responsible for it.

For example on Facebook.com, notice my interaction with the pages before and after disabling javascript.

![](img/disable_js.gif)

## Running your code in the console

For the rest of this tutorial, please use Google Chrome.

If you don't have it already, download it.

Then open Google Chrome.

Once Chrome is opened, open the developer tools by pressing
- on a mac: `Cmd` + `Opt` + `J`
- on a PC: `Ctrl` + `Shift` `J`

This is a place where we can run Javascript code.


## Fundamental Concepts in Javascript

### How to go about this section

If you don't understand anything you type
- ask your neighbors to see if they get it
- if not, ask a facilitator.

### you can add numbers together in javascript:

> ![](img/1_1+2.gif)

- type `1 + 2;`
- press `enter` to submit it
- notice that "it gives you back" `3`
- what this "gives you back" can be referred to as the output of `1 + 2;`

```
A Note On Comments

note that anything after a `//` is what is called a comment
anything that is 'commented' is ignored by the computer

therefore

1 + 2; // -> 3
^^^^^^ this is looked at by the computer

1 + 2; // -> 3
       ^^^^^^^ this is ignored by the computer

// this is a comment
^^^^^^^^^^^^^^^^^^^^ everything is ignored by the computer
```

```
A Note on Semicolons

1 + 2;
     ^ this must be at the end of almost every line in javascript;

sometimes the code may still work without it, 
sometimes however it doesn't. Best to just add it.
```

```
Challenge!  
Time        __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

Try adding two other numbers together.
```

### You can use variables to hold values of numbers

> ![](img/2.gif)

- I type `var x = 3;`
- press `enter`
- this is equivalent of saying "I want to set the variable x to be equal to 3"

### I can ask the computer what the value of `x` is

If I want to find out the value of `x`, I can just type it in the console
and press `enter`

> ![](img/3.gif)

### A note about variables
In math class you would have written this is "x = 3"

In javascript, you need to add:
    
- "var" in front of variables
- a ";" at the end of every line

I also notice that the output is `undefined`. 

Note, this doesn't mean mean that the output of `var x = 3;` is not 
  defined. This is just outputted anytime you assign a variable to
  something.

```
Challenge!  
Time        __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

Can you set the variable `y` to be equal to 2 and then check it's value?
```

Solution:

- Type this into the console `var y = 4;` and press `enter`
- type `y` again to get the value of `y`

### Manipulating variables

Now that we know that `x` is `3` and `y` is `4`, we can do

> ![](img/4.gif)

```
Try It!  
            __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

Try adding a number to a variable, like `y + 1`
```

### I can use multiWordVariables

However variables cannot have spaces in them.

> ![](img/5.gif)

### JavaScript also lets you play with words

If I just wrote `numberOfChickens` without defining it:

> ![](img/6.gif)

You will get the error:

> ![](img/7.png)

Which just means "you have never defined the variable `numberOfChickens`"

I would also get an error if I wrote `Hello my name is Jonathan`

> ![](img/8.png)

So how do i actually write words? You have to put quotes around it, like this:

> ![](img/9.gif)

And you can write longer phrases too

> ![](img/10.png)

```
Try it!
            __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

Try making a couple Strings of your own in the console.
```

**Important Vocabulary**

`"Hello"` and `"Hello! welcome to wonderland!"` are Strings.

A `String` is *anything* inside of double quotes.

Therefore `"2"` is a `String` because it is inside double quotes.

### Adding multiple Strings together

I can add strings like this:

![](img/12.gif)

Oops, I should add a space:

![](img/13.gif)

I can add multiple String together:

![](img/14.gif)

```
Try it!
            __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

Try adding multiple Strings together in the console.
```

### I can assign Strings to variables

![](img/15.gif)

```
Try it!
            __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

Try to assign a string to a variable and add another String to it.
```

### I can add two variables together that are both Strings

![](img/16.gif)

```
Try it!
            __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

Try assigning two variables as strings and adding them together!
```

### I can assign a variable to the output to the sum of both Strings

![](img/17.gif)

```
Try it!
            __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

Try assigning a variable to the sum of two variables.
```

### The prompt function

This line of code below is a function

```
prompt("What is your name?");
```

![](img/18.gif)

Every function performs an action and has an output.

In this case, this function, `prompt`, performed the **action** of popping up a question on the screen based on the **input**. Then based on whatever the user types it becomes the **output** of the function.

There are 3 components to a function

- inputs
- actions
- outputs

Some terminology
```
prompt("What is your name?");
^^^^^^ this is the name of the function

prompt("What is your name?");
      ^                    ^
      to run a function, the name of a function is followed by parathesis
      anything inside of the parenthesis is an input

prompt("What is your name?");
       ^^^^^^^^^^^^^^^^^^^^ this is the input

       in this case, this function had 1 input
       and that input was the string "What is your name?"

The ACTION performed is the box actually popping up on the screen

And the OUTPUT of the function, was the String "Jonathan"
```

### I can assign a variable to the output of a function

![](img/20.gif)

```
Try It!
            __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

Try assigning a variable to an output of your own prompt function.
```

### The alert function

![](img/21.gif)

The `alert` function is like the `prompt` function except

- it has `0` inputs
- it's action is similar in that it makes a popup box, but the popup doesn't have an area where the user can type in.
- it's output is always `undefined`

## Writing code in a proper editor

### Creating a new folder
- Open your **EXISTING** `hack-camp` Cloud9 workspace and create a new folder called
  `texting-site` inside your already existing `hack-camp` folder
  - This is similar to how you set up your `portfolio` folder for the previous
    workshop

### Creating index.html
- Inside the folder create a new file called `index.html` and open it
- Go ahead and type out a website template to the file

  ```html
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body>
    </body>
  </html>
  ```

### Adding the Maestro script
- At the `<head>` tags, let's go ahead and create a `<script>` tag with an
  attribute `src` set to `https://cdn.rawgit.com/hackedu/hack-camp/62cb48e3c30986350e71fd3153501883bee532c1/cohort_4/playbook/workshops/maestro/src/lib/maestro.js`

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <script type="text/javascript" src="https://cdn.rawgit.com/hackedu/hack-camp/62cb48e3c30986350e71fd3153501883bee532c1/cohort_4/playbook/workshops/maestro/src/lib/maestro.js"></script>
    </head>
    <body>
    </body>
  </html
  ```

  - `<script>` tags are how we tell the browser to include JavaScript in the
  page. Where HTML and CSS make up what is on a webpage and how it's shown,
  JavaScript is the programming language that makes webpages functional. With
  JavaScript we can:
    - Make websites respond to user interactions
    - Building apps and games (e.g.
      [2048](http://gabrielecirulli.github.io/2048/))
    - Access and modify information on the internet (e.g. finding out the
      weather, sending a text message)
  - `https://maestro.ngrok.com/static/baton.js` is a file with a bunch of
    JavaScript commands in it we've already created for you

### Adding our own JavaScript code

- Now let's create a file to store our JavaScript code in. Go ahead and create a
  directory, `js`, and then create a file, `script.js`, inside the `js`
  directory.
- Now let's tell the browser to include this JavaScript file as well. Below the
  `<script>` tag add a second `<script>` tag in your `<head>` with the attribute
  `src` set to `js/script.js`

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <script type="text/javascript" src="https://cdn.rawgit.com/hackedu/hack-camp/62cb48e3c30986350e71fd3153501883bee532c1/cohort_4/playbook/workshops/maestro/src/lib/maestro.js"></script>
      <script src="js/script.js"></script>
    </head>
    <body>
    </body>
  </html>
  ```

### Writing our code in script.js

Let's type the following code in the `script.js` file

```
var name = prompt("What is your name?");
alert("Hello " + name + ". Welcome to my website!");
```

Go ahead and run it.

What' happening:



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