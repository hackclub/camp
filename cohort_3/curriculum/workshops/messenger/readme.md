# Fundamentals
The purpose of this workshop is to
1. Introduce you to the fundamental concepts and vocabulary of the basics of web development and computer science
2. Learn how to discect how an application works to build something similar

## How to use this guide
At the end of every section, recap with your parter your understanding as if you were in preparation to teach it to someone else.

## JS
Javascript will be abbreviated as js

## Understanding Javascript Functions

Javascript functions, like in math class, have the following components.

- a name
- inputs
- outputs

### Example 1

`f(x) = x²`

| Question                                     | Answer   |
|----------------------------------------------|----------|
| what is the function's name?                 | `f`      |
| how many inputs does the function `f` have?  | `1`      |
| what is the variable name of the input?      | `x`      |
| what is the type of the input?               | `number` |
| what is the output of `f(2)` equal to?       | `4`      |
| what is the output of `f(3)` equal to?       | `9`      |
| what is the type of the output?              | `number` |

<!--
    Table Generated with http://www.tablesgenerator.com/markdown_tables
    To edit, upload http://cl.ly/3a2V2f0f3T2G
-->

**In general, what does the function `f` do?**: 

Given a a single number, it outputs the square of that number.

### Example 2

`g(y) = 2y`

| Question                                     | Answer   |
|----------------------------------------------|----------|
| what is the function's name?                 | `g`      |
| how many inputs does the function `g` have?  | `1`      |
| what is the variable name of the input?      | `y`      |
| what is the type of the input?               | `number` |
| what is the output of `g(4)` equal to?       | `8`      |
| what is the output of `g(5)` equal to?       | `10`     |
| what is the type of the output?              | `number` |

**In general, what does the function `f` do?**: 

Given a single number, it outputs double of the original number.

### Example 3

`h(x, y) = x + y`

| Question                                     | Answer   |
|----------------------------------------------|----------|
| what is the function's name?                 | `h`      |
| how many inputs does the function `g` have?  | `2`      |
| what is the variable name of the 1st input?  | `x`      |
| what is the type of the 1st input?           | `number` |
| what is the variable name of the 1st input?  | `y`      |
| what is the type of the 2nd input?           | `number` |
| what is the output of `h(1, 2)` equal to?    | `3`      |
| what is the output of `h(3, 4)` equal to?    | `7`      |
| what is the type of the output?              | `number` |


**In general, what does the function `f` do?**: 

Given two inputs numbers, it sums the two numbers togther.

### Adding in Variables

> **Function Reference**

> `f(x) = x²`

> `g(y) = 2y`

> `h(x, y) = x + y`

`a = f(3)`


What is `a` equal to?

- `9`

--

`b = g(4)`


What is `b` equal to?

- `8`

--

`c = h(3, 3)`


What is `c` equal to?

- `9`

--

Given that

`f(x) = x²`

`g(y) = 2y`

`h(x, y) = x + y`

and

`n = f(h(g(3),4))`

What is `n` equal to?

-  Looks confusing no?

Let's simplify it together!

```
n = f(h(g(3),4))
        ^ we would want to simplify this first
        
g(3) => 6

n = f(h(6, 4))
      ^ we'd want to simplify this next
      
h(6, 4) => 10

n = f(10)
    ^ then we can finally simplify this
    
f(10) => 100

n = 100

huzzah!
```

> Reminder:

> `f(x) = x²`

> `g(y) = 2y`

> `h(x, y) = x + y`

So instead of writing the convoluted statement `d = f(h(g(3),4))`, we can write

```
a = g(3)
b = h(a, 4)
n = f(b)


a = g(3)
- a is therefore 6

b = h(a, 4)
- when I substitute 6 as "a"
b = h(6, 4)
- b is therefore 10

n = f(b)
- when I substitue 10 as "b"
n = f(10)
- n is therefore 10
```

The above is a lot easier to follow!

## Analogy in the JS World

Functions in the JS are very similar to that of the math world and in addition to inputs and outputs, they also have  something called a "**side effect**" (discussed more later).

### Rewriting math functions in Javascript

Here are the functions from math world and their javascript equivalent:

```js

// Math
f(x) = x²
// JS
function f(x) {
    return x * x;
}


// Math
g(y) = 2y
// JS
function g(y) {
    return 2*y;
}


// Math
h(x, y) = x + y
// JS
function h(x, y) {
    return x + y;
}

// Math
j(x, y) = f(h(g(x),y))
// JS convoluted version
function j(x, y) {
    return f(h(g(x),y); 
}
// JS clearer version
function j(x, y) {
    var a = g(x);
    var b = h(a, y);
    var c = f(b);
    return c;
}

// There is an alterate way to write the javascript functions as well that I prefer and I personally think is easier to understand:

// instead of:
function j(x, y) {
    var a = g(x);
    var b = h(a, y);
    var c = f(b);
    return c;
}
// we can write
var j = function(x, y) {
    var a = g(x);
    var b = h(a, y);
    var c = f(b);
    return c;
}

![](http://classic.cloversites.com/images/html-version/shared/try-it-out-button.gif)
```

### `return`

In math world, every function has an output. In javascript world, that's kinda still true but kinda not really.

In the previous section, rewriting math functions in Javascript, notice that the output always has this the word `return` before the line that we would have wanted to be the output. That begs the question, what happens if a function doesn't have a return in it? Will the that function have an output?

**It turns out the functions that do not have a `return` written in it have the output of `undefined`** It is not that the out put is not defined, there is some actualy *thing* in javascript called `undefined`. Google for more information, I found this [one Stack Overflow post](http://programmers.stackexchange.com/questions/101107/what-exactly-undefined-means-in-javascript-why-its-there-what-usages-it-has) that may help.

Example:

```js

function k() {
    var x = 3;
    var y = a * 3;
}

var a = k();
    ^ is equal to `undefined` because 
      the function `k` does not have an output.
      
      The function `k` does no output because
      there is no `return` statement in k
```

### `alert`

| Question                                     | Answer   |
|----------------------------------------------|----------|
| what is the function's name?                 | `alert`      |
| how many inputs does the function `g` have?  | `0`      |
| what is the type of the input?               | `String` |
| what is the output of `alert("Warning!")` equal to?       | `undefined`      |
| what is the output of `alert("Help! I am trapped!") ` equal to?       | `undefined`     |
| what is the type of the output?              | `undefined` |

**Side Effects**
This is the first function we've seen that has this thing we called a **"side effect"**. A side effect is something that running a function causes to happen that is not an output. The alert function has the output of `undefined`. However, there is this popup box that also appears on the screen when the function is called. The popup box is not an output, it is a side effect: something else that happens as a result of running the function.

**Examples**

```js

var a = alert("Warning!");
    ^ would be undefined because alert does not return anything
    
var b = alert("Help! I am trapped!")
    ^ would be undefined because alert does not return anything
```

![](http://classic.cloversites.com/images/html-version/shared/try-it-out-button.gif)

### `Math.random`

| Question                                     | Answer   |
|----------------------------------------------|----------|
| what is the function's name?                 | `Math.random`      |
| how many inputs does the function `Math.random` have?  | `0`      |
| what is the type of the input?               | `n/a` |
| what is the output of `Math.random()` equal to?       | `a random number between 0 and 1`      |
| what is the type of the output?              | `number` |

**Example Usage**

```js
var a = Math.random();
    ^ a would be a random number between 0 and 1 like `0.399` or something
    
var b = Math.random();
    ^ a would be a random number between 0 and 1 like `.0.2048` or something
```

![](http://classic.cloversites.com/images/html-version/shared/try-it-out-button.gif)


### `Math.floor;`

| Question                                     | Answer   |
|----------------------------------------------|----------|
| what is the function's name?                 | `Math.floor`      |
| how many inputs does the function `Math.random` have?  | `1`      |
| what is the type of the input?               | `number` |
| what is the output of `Math.floor(3.2)` equal to?       | `3`      |
| what is the output of `Math.floor(3.9)` equal to?       | `3`      
| what is the output of `Math.floor(3)` equal to?       | `3`      |
| what is the type of the output?              | `number` |

**In general, what does the function `f` do?**: 

The Math.floor function returns the largest integer less than or equal to the inputted number.

**Example Usage**

```js
var a = Math.floor(3.2)
var b = Math.floor(3.9)
var c = Math.floor(3)

    ^ a, b, and c are all equal to 3
```

### Identifying Functions ProTip!

Anytime you see a `(` or an `)`, you are probably looking at a function.

### Types in JS

In the math world, the only `type` that we had were `numbers` (like `1`, `3`, or `4`) in js, in addition to numbers, there are:

**Strings**
Anything inside of quotes is a string:

```
The below are strings:

    "dog"
    "cat"
    "123"
    "x2f hello world"

The below are NOT strings

    123 <- this is a number
    dog <- this is a variable
    hello world <- this is two variables next to each other
                   which is just wrong
```
More on Strings
- from [W3 Schools](http://www.w3schools.com/js/js_strings.asp) ([a warning about w3 schools](http://w3fools.com/))
- from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

**`undefined`**

We also learned about `undefined` a bit above.

### `prompt`

`prompt("What is your name?")`

| Question                                     | Answer   |
|----------------------------------------------|----------|
| what is the function's name?                 | `prompt` |
| how many inputs does the function `g` have?  | `1`      |
| what is the type of the input?               | `string` |
| what is the output of `prompt("What is your name?")` equal to?       | `whatever the user types into the box that pops up`      |
| what is the output of `prompt("What is the meaning of life?")` equal to?       | `whatever the user types into the box that pops up `     |
| what is the type of the output?              | `string` |

Google `javascript prompt` for more information.

**In general, what does the function `prompt` do?**: 

Given an input string, pops up a box on the screen with the input string displayed and a field where a user can type and outputs whatever the user types in.

**Side Effects**

Note that this function that makes a popup box appear on the screen with an input. It is not the output; it is something else that happens so therefore it is a side effect.

**Example Usage**

```js
var name = prompt("What is the url of the image?")
    ^ name would equal to the string of whatever the user typed into the box
    
var age = promprt("How old are you?")
    ^ age would equal to the string of whatever the user typed into the box
      Note: if I typed 14, the output would be the string "14"
            NOT the number.
```

![](http://classic.cloversites.com/images/html-version/shared/try-it-out-button.gif)


### Introducing a new type, Objects!

Read [this article about objects](http://www.w3schools.com/js/js_objects.asp) from W3 schools which actually isn't bad.

The only thing I would add to it (only read what I am about to write next if you've read the article) is that

Instead of creating an object all at once like
```js
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
```

You can create an empty object first and the populate the empty object which would have the same effect:

```js
var person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
```

![](http://classic.cloversites.com/images/html-version/shared/try-it-out-button.gif)


### document.createElement

| Question                                     | Answer   |
|----------------------------------------------|----------|
| what is the function's name?                 | `document.createElement ` |
| how many inputs does the function `g` have?  | `1`      |
| what is the type of the input?               | `string` |
| what is the output of `document.createElement("p")` equal to?       | `an html element object that represents a set of p tags`      |
| what is the output of `document.createElement("input")` equal to?       | `an html element object that represents an input tag`     |
| what is the type of the output?              | `html element object` |

**In General**
Given a tag name as an input, this function creates an html element object based on the given tag name.

**Examples**

```js
var paragraph = document.createElement("p");
    ^ paragraph is now equal to an html paragraph element object

var input = document.createElement("input");
    ^ input is now equal to an html input element object

var image = document.createElement("img");
    ^ image is now equal to an html image element object
```

![](http://classic.cloversites.com/images/html-version/shared/try-it-out-button.gif)


### HTML element objects have properties

**Examples**

_Creating paragraph tag element and setting it's innerHTML property to be "Hello World":_

![](https://s3.amazonaws.com/f.cl.ly/items/3z0p3B283s243o1x2K1K/Image%202015-07-21%20at%208.37.10%20AM.png)

_Create an submit input_

![](https://s3.amazonaws.com/f.cl.ly/items/2Y3v1q1V043e1P1f132H/Image%202015-07-21%20at%208.51.41%20AM.png)

_Accessing an existing property_

![](https://s3.amazonaws.com/f.cl.ly/items/0w0g2d3M2e0S1X103O0R/Image%202015-07-21%20at%209.01.57%20AM.png)

> Notice that once I've set the `innerHTML` property in the middle command, I can ask the paragraph html element object for it's `innerHTML` on the last line.

_Creating an image tag and setting :_

![](https://s3.amazonaws.com/f.cl.ly/items/2m1E1x3v2Z3s3D3n2p0E/Image%202015-07-21%20at%208.42.45%20AM.png)

A note on terminology:

```js

stars (*) surround relevant vocabulary like *this*

img.src = "https://i.imgur.com/qqHJgeR.jpg"
    ^ by setting the src *property* of the image element object
    
the browser adds the "src" *attribute* 
<img src="https://i.imgur.com/qqHJgeR.jpg">
     ^ this is the source *attribute* which has the *value* of "https://i.imgur.com/qqHJgeR.jpg"
```

![](http://classic.cloversites.com/images/html-version/shared/try-it-out-button.gif)

### document.getElementById

| Question                                     | Answer   |
|----------------------------------------------|----------|
| what is the function's name?                 | `document.getElementById` |
| how many inputs does the function `g` have?  | `1`      |
| what is the type of the input?               | `string` |
| what is the output of `document.getElementById("name")` equal to?       | `assuming that there is an element on the page with the id attribute of "name", then the output is that html element object that has the id name. Otherwise, if no element with the id "name" exists, this function will return `null``      |
box that pops up `     |
| what is the type of the output?              | `html element object` |

![](http://classic.cloversites.com/images/html-version/shared/try-it-out-button.gif)


### Challenge

![](http://classic.cloversites.com/images/html-version/shared/try-it-out-button.gif)


Using the questions as illustrated above:

- what is the name of the function?
- how many inputs does it have?
- what is the type of each input?
- give some examples of how you might use the function?
- what is the type of the resulting output?

and explain how
- document.setAttribute
- element.appendChild

using the terminology above.

Hints:

If I have a shopping list (which is similar to HTML because it is also in a tree like hierarchy)

```markdown
- fruit
    - cherries
    - apples
- meat
    - chicken
        - breast
        - drumsticks
        - thighs
```

- `meat` is a parent to `chicken`
- `meat` has the child `chicken`
- `breast`, `drumsticks`, and `things` are all children of chicken
the parent of `breast` is `chicken`
- `breast`, `drumsticks`, and `things` are siblings
- `fruit` and `meat` are siblings

## Analyzing Code

Take this code and put it into your own cloud9 projects so you can tinker with it. Create a new file for each code block below. I'm still making the videos for these so I'll keep you posted!

# Messenger - Part I: Base Version

- [1. Setup Video](http://youtu.be/LUuaoxMgD-A)
- [2. Tinkering & Understanding Video](https://www.youtube.com/watch?v=3DE0HnZM9VI)

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Messenger</title>
    <link href="style.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <div class="messenger container">
      <header>Messenger</header>
      
      <!--Username Input-->
      <div class='messenger-toolbar'>
        <label for="usernameInput">Username:</label>
        <input type='text' id='usernameInput' placeholder='enter a username...'>
      </div>
      
      <!--List of Messages-->
      <ul id='messageList' class="messenger-messages"></ul>
      
      <!--New Message Input-->
      <footer>
        <input type='text' id='messageInput'  placeholder='Type a message...'>
      </footer>
      
      <button id="submitButton">Send</button>
    </div>
    
    <script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js"></script>
    <script src="main.js"></script>
  </body>
</html>
```

`main.js`
```js
var usernameInput = document.getElementById("usernameInput");
var messageInput = document.getElementById("messageInput");
var messageList = document.getElementById("messageList");
var submitButton = document.getElementById("submitButton");

var writeMessage = function(name, message) {
  var messageElement = document.createElement("li");
  messageElement.innerHTML = name + ": " + message;
  messageList.appendChild(messageElement);
}

var addChat = function() {
  var username = usernameInput.value;
  if (username === "") {
    username = "anonymous"
  }
  var message = messageInput.value;

  writeMessage(username, message);
}

submitButton.onclick = addChat;
```

`style.css`
```css
html, body {
  height: 100%;
}

.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  max-width: 500px;
}

.messenger {
  font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  border-radius: 3px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  background-color: #dfe3ea;
  border: 1px solid #CCC;
  overflow: auto;
  padding: 0px;
  font-size: 18px;
  line-height: 22px;
  color: #666;
}

.messenger header {
  background-color: #EEE;
  background: -webkit-linear-gradient(top, #EEEEEE, #DDDDDD);
  background: linear-gradient(to bottom, #EEEEEE, #DDDDDD);
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.9), 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px 3px 0px 0px;
  border-bottom: 1px solid #CCC;
  line-height: 24px;
  font-size: 12px;
  text-align: center;
  color: #999;
}

.messenger input {
  box-sizing: border-box;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 0px 10px;
  height: 30px;
  font-size: 18px;
  width: 100%;
  font-weight: normal;
  outline: none;
}

.messenger .messenger-toolbar {
  background-color: #FFF;
  padding: 10px;
  position: relative;
  border-bottom: 1px solid #CCC;
}

.messenger .messenger-toolbar label {
  text-transform: uppercase;
  line-height: 32px;
  font-size: 14px;
  color: #999;
  position: absolute;
  top: 10px;
  left: 20px;
  z-index: 1;
}

.messenger .messenger-toolbar input {
  box-shadow: none;
  border: 1px solid #FFF;
  padding-left: 100px;
  color: #999;
}

.messenger .messenger-toolbar input:active, .messenger .messenger-toolbar input:focus {
  color: #1d9dff;
  border: 1px solid #FFF;
}

.messenger ul {
  list-style: none;
  margin: 0px;
  padding: 20px;
  overflow: auto;
}

.messenger ul li {
  margin-bottom: 10px;
  line-height: 24px;
}

.messenger ul li:last-child {
  margin: 0px;
}

.messenger ul .messenger-username {
  margin-right: 10px;
}

.messenger footer {
  display: block;
  padding: 10px;

}

.messenger footer input {
  border: 1px solid #ced3db;
  height: 40px;
}
```

# Messenger - Part II: Adding The Database

[Video Details](https://youtu.be/eGjgJI41Ecs)

```js
var messagesRef = new Firebase("https://camp-messenger.firebaseio.com/");

var usernameInput = document.getElementById("usernameInput");
var messageInput = document.getElementById("messageInput");
var messageList = document.getElementById("messageList");
var submitButton = document.getElementById("submitButton");

var writeMessage = function(name, message) {
  var messageElement = document.createElement("li");
  messageElement.innerHTML = name + ": " + message;
  messageList.appendChild(messageElement);
}

var addChat = function() {
  var username = usernameInput.value;
  if (username === "") {
    username = "anonymous"
  }
  var message = messageInput.value;

  var data = {};
  data.name = username;
  data.message = message;

  messagesRef.push(data);
  messageInput.value = "";
}

messagesRef.limitToLast(10).on('child_added', function (snapshot) {
  var data = snapshot.val();
  writeMessage(data.name, data.message);
});

submitButton.onclick = addChat;
```


# Final Version

*all other files have not changed*

```js
var messagesRef = new Firebase("https://camp-messenger.firebaseio.com/");

var usernameInput = document.getElementById("usernameInput");
var messageInput = document.getElementById("messageInput");
var messageList = document.getElementById("messageList");

var keyPressCallback = function (e) {
  if (e.keyCode == 13) { // if user presses enter
    var username = usernameInput.value;
    if (username === "") {
      username = "anonymous"
    }
    var message = messageInput.value;

    var data = {};
    data.name = username;
    data.message = message;

    messagesRef.push(data);
    messageInput.value = "";
  }
};

messageInput.onkeypress = keyPressCallback;

var writeMessage = function(name, message) {
  var messageElement = document.createElement("li");
  messageElement.innerHTML = name + ": " + message;
  messageList.appendChild(messageElement);
}

messagesRef.limitToLast(10).on('child_added', function (snapshot) {
  var data = snapshot.val();
  writeMessage(data.name, data.message);
});
```

# TODO
- Insert questions to test understanding throughout to answer with your partners.
- Last time's tutorial talks about how to construct an app, this time we'll talk about how to figure out how an app works.
- I make chat application
- you make instagram application

