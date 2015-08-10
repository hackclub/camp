# Messenger

## TODO
- split up this page into multiple pages so that the solutions to a challenge
  is not immediately underneath of the challenge

## Partnering

Make sure you are with your partners when you do this workshop.

## What are we building?

We are building a simple messaging application.

See live demo: <!--TODO-->

## The objectives of this workshop:

- to practice building a complete project
- to solidify your understanding of accessing and adding elements
  to an HTML page using JavaScript.

## Understanding the Instagram Workshop

Here is a live demo <!--TODO--> of what we built in the Instagram workshop.

### Breaking it down

If we were to break down into steps what happens:

- when the page finishes loading
- tell the upload button that whenever someone clicks it
- prompt the user for a URL for the image
- then create a new image
- and add add that new image to the list of existing photos already on the page

### Examining the HTML

The HTML only contains two interesting elements:

- the button that you click
- a `<div>` element that you can put photos in

`index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="main.js"></script>
  </head>
  <body>
    <input id="upload-button" type="submit" value="Upload"/>  
    <div id="photos">
    </div>
  </body>
</html>
```

```
Note that you may be less familiar with the `<div>` tag.
Think of the `<div>` tag as an empty box that we use to store other things.

In our case, we want a place to put our images as we add them to the HTML page.
And so we use this <div> tag to put the images in.
<div> tag.
```

### Adding images to the HTML code

When we add an image, we want it to go into the `<div>` element.

In the below examples, the rest of the example, I'm going to only show the
`<div>` tag and hide the rest of the HTML page.

#### At first the `<div>` tag is empty

```html
<div id="photos">
</div>
```

#### Then after we add our first image, the `<div>` tag looks like this

<!--TODO: insert screenshots here-->

```html
<div id="photos">
  <img src="http://i.imgur.com/BdbsV4F.png">
</div>
```

#### Then after we add our second image...

```html
<div id="photos">
  <img src="http://i.imgur.com/BdbsV4F.png">
  <img src="http://i.imgur.com/mfAuIRU.png">
</div>
```

#### Then after we add our third image...

```html
<div id="photos">
  <img src="http://i.imgur.com/BdbsV4F.png">
  <img src="http://i.imgur.com/mfAuIRU.png">
  <img src="http://i.imgur.com/mukgIPn.png">
</div>
```

### Summary of what the JavaScript needs to do

Basically, the JavaScript just adds a new `<img>` tag inside of the `<div>`
each time the user clicks the button.

## Examining the JavaScript code

`main.js`

```js
window.onload = function() {

  var uploadButton = document.getElementById('uploadButton');
  uploadButton.onclick = function() {
    var photoUrl = prompt("Paste a URL of photo to add to the stream!");

    var img = document.createElement("img");
    img.src = photoUrl;

    var photos = document.getElementById("photos");
    photos.appendChild(img);
  }
};
```

Let's break down the code into multiple steps:

- <!--TODO: Insert Steps-->

### Waiting for the page to load

Before we do anything, we needed to wait for the page to load.

To do this, we can put our code inside the `window.onload` function like this:

```js
window.onload = function() {
  // this code inside here runs after the page is finished loading
  // any code I write needs to be inside of here
};
```

### Doing something when the button is clicked

The first thing we need to do is to create a reference to the button in the
HTML.

We can do this by using the function `document.getElementById`.

This function gets us back any element with the id that we give to it as the
input.

For example,

```js
document.getElementById('uploadButton');
```

we gave `document.getElementById` the input `'uploadButton'` so it will give us
back the element with the id `'uploadButton'`.

Now because we want to be able to reference this element later, we set a
variable equal to it:

```js
var uploadButton = document.getElementById('uploadButton');
```

Now we can put this code inside our `window.onload` function like so:

```js
window.onload = function() {
  var uploadButton = document.getElementById('uploadButton');
  // the variable `uploadButton` now references the upload button element
};
```

Now that we have the reference to the `uploadButton`, I write some code in it's
`onclick` function. The code inside this function will run whenever the button
is clicked:

```js
window.onload = function() {
  var uploadButton = document.getElementById('uploadButton');

  uploadButton.onclick = function() {
    // this code inside here runs whenever the upload button is clicked
    // any code I want to run when the button is clicked needs to be in here
  }
};
```

### Asking for a link to an image

We need to use `prompt` to ask the user for a URL to an image:

```js
window.onload = function() {
  var uploadButton = document.getElementById('uploadButton');

  uploadButton.onclick = function() {
    var photoUrl = prompt("Paste a URL of photo to add to the stream!");
    // ^ photoUrl now contains the URL that the user type into the prompt box
  }
};
```

### Creating the image element and setting it's src attribute

We need to actually create the image element that we want to insert into the
page.

We can use the `document.createElement` function to create a new HTML element

If we want to create a `<p>` tag, we would write

```js
document.createElement("p");
```

If we want to create an `<img>` tag, we would write

```js
document.createElement("img");
```

And so that we have a reference to the `<img>` tag that is created we write

```js
var img = document.createElement("img");
```

Right now, the variable `img` references an image tag that looks like this:

```html
<img >
```

Note that it does not have a source attribute.

To set the image tag's source attribute, we can do:

```js
var img = document.createElement("img");
img.src = "http://website.com/imge.png";
```

and now the image tag will look like this:

```html
<img src="http://website.com/imge.png">
```

Because we already have a reference to the URL of the image we want
in the `photoUrl` variable, so we can do something like this:

```js
var photoUrl = prompt("Paste a URL of photo to add to the stream!");

var img = document.createElement("img"); // creates new image element
img.src = photoUrl;
```

And we only want to run this code when the button is clicked so we put it in the
`uploadButton.onclick` function:

```js
window.onload = function() {
  var uploadButton = document.getElementById('uploadButton');

  uploadButton.onclick = function() {
    var photoUrl = prompt("Paste a URL of photo to add to the stream!");

    var img = document.createElement("img"); // creates new image element
    img.src = photoUrl;
  }
};
```

### Actually adding the image element to the page

We have successfully created an `<img>` element with the proper `src` property.

However it is still not on the page yet and the HTML page still looks like this:

```html
<div id="photos">
</div>
```

Now we need to add our image tag inside of the `<div>`.

We can do this by first obtaining a reference to that `<div>`.

Because our `div` has an id of `photos`, we can use, you guessed it,

```js
var photos = document.getElementById('photos')
```

To add any element inside of any other element, we can use the function:

```js
element1.appendChild(element2);
```

so in our case to add our image element inside of the photos element, we can do:

```js
var photos = document.getElementById("photos");
photos.appendChild(img);
```

Adding this code to everything else, we have:

```js
window.onload = function() {

  var uploadButton = document.getElementById('uploadButton');
  uploadButton.onclick = function() {
    var photoUrl = prompt("Paste a URL of photo to add to the stream!");

    var img = document.createElement("img");
    img.src = photoUrl;

    var photos = document.getElementById("photos");
    photos.appendChild(img);
  }
};
```

### Recap!

And that's all the code that we need to build the Instagram project.

To recap, there were 5 steps:

- waiting for the page to load
- doing something when the button was clicked
- asking the user for a link to an image
- creating an image element
- adding the newly created image element to another element on the page

```
Challenge Time!
            __
           / _)
    .-^^^-/ /
 __/       /
 <__.|_|-|_|

With your partner, quickly choose who is going to be Person A and who is going
to be Person B.

Then to make sure that you've both mastered the concepts,
take turns asking and answering each others questions and helping the other
if you guys stumble.

Person A: explain to Person B the "waiting for the page to load" section

Person B: explain to Person A the "doing something when the button was
          clicked" section

Person A: explain the "asking the user for a link to an image" section

Person B: explain the "creating an image element" section

Person A: explain the "adding the newly created image element to another
          element on the page" section
```

## Breaking down the messenger app:

Here is the live demo of the messenger app
<!--TODO: insert live demo-->

```
Challenge Time!
            __
           / _)
    .-^^^-/ /
 __/       /
 <__.|_|-|_|


Knowing how the Instagram worked, outline how you may break down the messenger
app into smaller pieces?

Write down the pieces somewhere.
```

## One potential solution for breaking down the messenger app:

- waiting for the page to load
- doing something when the button is clicked
- accessing the value of the new message input
- accessing the value of the username input
- creating the message element with the value of the new message
  and username inputs
- adding the newly created message input to the page

## HTML / CSS walkthrough

For this project, we provided a pre-made HTML & CSS template so that the
workshop can focus on the JavaScript.

Moreover, using our template will give you experience in using existingly
written code.

### HTML Code

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Messenger</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="main.css" rel="stylesheet">
  </head>
  <body>
    <div class="messenger container">
      <header>Messenger</header>

      <div class='messenger-toolbar'>
        <label for="usernameInput">Username:</label>
        <input type='text' id='usernameInput' placeholder='enter a username...'>
        <!-- ^ username input-->
      </div>

      <ul id='messageList' class="messenger-messages">
      </ul>
      <!-- ^ list of messages -->

      <footer>
        <input type='text' id='messageInput'  placeholder='Type a message...'>
        <!-- ^ new message input-->
      </footer>

      <button id="submitButton">Send</button>
    </div>

  </body>
</html>
```

The only 3 items that you need to pay attention to in here are

#### the username input
```html
<input type='text' id='usernameInput' placeholder='enter a username...'>
```

#### the userame input
```html
<input type='text' id='messageInput'  placeholder='Type a message...'>
```

#### the list of messages unordered list
```html
<ul id='messageList' class="messenger-messages">
</ul>
```

```
Optional Challenge Time!
            __
           / _)
    .-^^^-/ /
 __/       /
 <__.|_|-|_|

If you've never seen the <ul> tag before, go Google it and figure out what is is
and how to use it.

After you've tried Googling and talking to your partner and you're still not
sure, feel free to ask a facilitator.

You'll need to understand this for the rest of the tutorial to make sense.
```

## Appending the messages to the <ul> tag

Similar to how we would create and append an `<img>` element and then add it
to the `<div>` element for each new image in the Instagram workshop,
we will create and append a `<li>` to the `<ul>` for each message sent.

For example, at the very beginning when there are no messages sent, the
`<ul>` element is empty:

```html
<ul id='messageList' class="messenger-messages">
</ul>
```

Then when I send the message,

```
Yo! What's up guys?
```

We'll want to add an `<li>` tag to the `<ul>` like so:

```html
<ul id='messageList' class="messenger-messages">
  <li>Jonathan: Yo! What'up guys?</li>
</ul>
```

Then if I send another message:

```
How are y'all doing?
```

We'll need to create another `<li>` and add it to the `<ul>` like this:

```html
<ul id='messageList' class="messenger-messages">
  <li>Jonathan: Yo! What'up guys?</li>
  <li>Jonathan: How are y'all doing?</li>
</ul>
```

<!--TODO-->

## window.onload

window.onload = function() {
  alert("the window has loaded");
}

## submitButton.onclick

window.onload = function() {

  var submitButton = document.getElementById("submitButton");
  submitButton.onclick = function() {
    alert("the submit button was clicked");
  }
}


## write something to the page

### Part 1: WRITE IT MANUALLY IN THE HTML FIRST

### Part 2: THEN WRITE IT WITH CODE

window.onload = function() {

  var submitButton = document.getElementById("submitButton");
  var messageList = document.getElementById("messageList");
  submitButton.onclick = function() {
    var messageElement = document.createElement("li");
    messageElement.innerHTML = "Jonathan: Yo, what's up?"
    messageList.appendChild(messageElement);
  }
}


## getting the contents of the message boxes

### Part 1: ACCESS THE CONTENT IN THE CONSOLE

var messageInput = document.getElementById("messageInput");
var message = messageInput.value;
console.log(message);

### Part 2: I DO MESSAGE INPUT

window.onload = function() {

  var submitButton = document.getElementById("submitButton");
  var messageList = document.getElementById("messageList");
  var messageInput = document.getElementById("messageInput");

  submitButton.onclick = function() {
    var messageElement = document.createElement("li");

    var message = messageInput.value;
    messageElement.innerHTML = message;

    messageList.appendChild(messageElement);
  }
}

### Part 3: YOU DO USERNAME INPUT

window.onload = function() {

  var submitButton = document.getElementById("submitButton");
  var messageList = document.getElementById("messageList");
  var messageInput = document.getElementById("messageInput");
  var usernameInput = document.getElementById("usernameInput");

  submitButton.onclick = function() {
    var messageElement = document.createElement("li");

    var message = messageInput.value;
    var username = usernameInput.value;

    messageElement.innerHTML = username + ": " + message; // insert hint, you may have the question "javascript how do you combine two strings"

    messageList.appendChild(messageElement);
  }
}

## Extra Credit

// Bonus Extra Credit 1

// make it work with the keyboard instead

// Bonus Extra Credit 2

// making it work in addition to the submit button

// Bonus Extra Credit 3

// challenge,
  // build a group message SMS app
  // build an app that lets you do group message and if you're not online, it will text you
