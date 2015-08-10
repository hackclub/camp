# Messenger

## Partnering

There is a component where you work with your partners for this workshop.
Make sure you are with your partners when you do this workshop.

## What are we building?

We are building a simple messaging application.

[See the live demo.](https://rawgit.com/hackedu/hack-camp/50b54d2436ff15679735ca5c8c50d7ee2ff7b744/cohort_4/playbook/workshops/messenger/src/index.html)

## The objectives of this workshop:

- to solidify your understanding of accessing and adding elements
  to an HTML page using JavaScript.
- to practice building a complete project

## Are you already familiar with the this?

Some potential challenge projects:

- build a group messaging SMS app
- build a real time chat app that sends you messages over the messaging client
  when you're online and sends you SMS when you're idle or offline
- add firebase to this chat for realtimze syncing

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

Moreover, using our template will give you experience in using existing
written code.

### HTML Code

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Messenger</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="main.css" rel="stylesheet">
    <script src="main.js"></script>
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

## Project Setup Challenge

```
Challenge Time!
            __
           / _)
    .-^^^-/ /
 __/       /
 <__.|_|-|_|

You've created many web projects, see if you can figure out how to
create the necessary files and folders for your project on your own by

- looking at old code / workshops
- googling
```

## Project Setup Solution

- Create the new folder, `messenger` inside of the root of your **existing**
Cloud9 workspace.
- Inside of the `messenger` folder, create 3 files
  - `index.html`
  - `main.js`
  - `main.css`
- double click to open `index.html`
- In `index.html`, add the HTML base scaffold by typing the following code
  - don't copy and paste it
  - make sure to indent properly

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Messenger</title>

</head>
<body>
</body>
</html>
```

Now I need to tell `index.html` about my `main.js` file by adding the following
inside of my `head` tag

```html
<script type="text/javascript" src="main.js"></script>
```

and then I need to tell the `index.html` about my `main.css` file by adding the
following inside of my `<head>` tag

```html
<link rel="stylesheet" href="main.css">
```

My HTML file should now look something like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Messenger</title>

  <script type="text/javascript" src="main.js"></script>
  <link rel="stylesheet" href="main.css">
</head>
<body>
</body>
</html>
```

### Ensure LiveReload is running

Make sure that live reload is running by opening a terminal in Cloud9 and typing
`live_reload`. Ask a friend or a facilitator if you don't remember how to do
this.

## Starter Code

The focus of this tutorial is not to learn css or design but to focus on the
manipulation of HTML with javascript, that's why we're giving you the starter
code for HTML and CSS.

### So feel free to copy and paste the CSS file into your main.css
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

### But manually hand-type the below code into your index.html file

We recommend hand typing in this situation because you will be using and
manipulating the HTML lot throughout this project. Hand typing it gives you more
familiarity with the code.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Messenger</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script type="text/javascript" src="main.js"></script>
    <link rel="stylesheet" href="main.css">
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

## Now you are ready to try to build the messenger app on your own

We will challenge you to try to implement each step before looking at the
solution.

Here are the list of steps that we are going to follow:

- wait for the page to load
- do something when the button is clicked
- access the value of the new message input
- access the value of the username input
- create the message element with the value of the new message
  and username inputs
- add the newly created message input to the page

## Challenge: Wait for the page to load

```
Challenge Time!
            __
           / _)
    .-^^^-/ /
 __/       /
 <__.|_|-|_|

Write the JavaScript that waits for the page to load
```

## Solution: Wait for the page to load

Write a `window.onload` function

```js
window.onload = function() {
  alert("the window has loaded");
}
```

See the above section ["waiting for the page to load"](#waiting-for-the-page-to-load) for an explanation.

## Challenge: do something when the button is clicked

```
Challenge Time!
            __
           / _)
    .-^^^-/ /
 __/       /
 <__.|_|-|_|

Write the JavaScript that does something when the button is clicked.

There is a hint in the ["waiting for the page to load"](#doing-something-when-the-button-is-clicked) section.
```

Hint: 'Feel free to checkout the section [Doing something when the button is clicked]() in the section above.


## Solution: do something when the button is clicked

Inside of the `window.onload` function,

- find the `submitButton` using `document.getElementById`
- and create an `onclick` function for the newly found `submitButton`

```js
window.onload = function() {
  var submitButton = document.getElementById("submitButton");

  submitButton.onclick = function() {
    alert("the submit button was clicked");
  }
}
```

Doing something when the button is clicked
["waiting for the page to load"](#doing-something-when-the-button-is-clicked) for an explanation.

## Challenge: Access the value of the new message input

```
Challenge Time!
            __
           / _)
    .-^^^-/ /
 __/       /
 <__.|_|-|_|

Use Google to try to figure out how to access the value of an input box using
JavaScript.

Hint: the new message input tag has the id `'messageInput'`
```

## Solution: Access the value of the new message input

- I google `javascript get value of input box`
- I open the
  [first result (a StackOverflow result)](http://stackoverflow.com/questions/11563638/javascript-get-input-text-value)
- I find the most highly rated solution:
  ```js
  document.getElementById('textbox_id').value;
  ```
- I know that the above code is actually two steps
  1. finding the element by it's id
  2. getting it's value
- So I decide to break up the example into two parts so that it's easier to
  understand
  ```js
  var textBox = document.getElementById('textbox_id');
  var textBoxValue = textBox.value;
  ```
- Now I translate the example to what I need by
  - finding the element with the `id` of `messageInput`
  - changing the variable names to match
  ```js
  var messageInput = document.getElementById('messageInput');
  var messageInputValue = messageInput.value;
  ```
- Great! Now I can add this to my code:
  ```js
  window.onload = function() {
    var submitButton = document.getElementById("submitButton");

    submitButton.onclick = function() {
      var messageInput = document.getElementById('messageInput');
      var messageInputValue = messageInput.value;
      alert("The new message is " + messageInputValue);
    }
  }
  ```
- Note that I added an `alert` above so that I could see the value of whatever
  was in the message input

## Challenge: Access the value of the username input

```
Challenge Time!
            __
           / _)
    .-^^^-/ /
 __/       /
 <__.|_|-|_|

In the above code example, when you clicked the button, it would alert whatever
was inside of the message input box.

Your challenge now is to figure out how to make it so that it it also alerts
the value of the username input box. So when you click on the button
- it alert the value of the message input box
- and then has a second alert popup with the value of the username box
```

## Solution: Access the value of the username input

```js
window.onload = function() {
  var submitButton = document.getElementById("submitButton");

  submitButton.onclick = function() {
    var messageInput = document.getElementById('messageInput');
    var messageInputValue = messageInput.value;
    alert("The new message is " + messageInputValue);

    var usernameInput = document.getElementById("usernameInput");
    var usernameInputValue = usernameInput.value;
    alert("The username is " + usernameInputValue);
  }
}
```

## Challenge: Create the message element with the value of the new message and username inputs

```
Challenge Time!
            __
           / _)
    .-^^^-/ /
 __/       /
 <__.|_|-|_|

In the above code snippet, we successfully have a reference to the user's
username as well as their new message. We can now create a new HTML element
to add to the page.

Use Google or review the code in [Creating the image element and setting it's
src attribute](#Creating the image element and setting it's src attribute) to
try to figure out how to create a new `<li>` element.

Hint:
- for the img tag, you needed to set the src
- for the `<li>` element, you'll need to set the `innerHTML` property
```

## Solution: Create the message element with the value of the new message and username inputs

- I google for `javascript create an li`
- I see that the second result is "[Javascript to create an li and append to an ol](http://stackoverflow.com/questions/9107541/javascript-to-create-an-li-and-append-to-an-ol)"
  almost exactly what I want.
- I look at the first answer and it looks confusing so I skip it
- I skip the next answer which has a rating of a `-1`
- I then go to the third answer and see
  ```js
  document.createElement("li");
  ```
  which jobs my memory back to what I did in
  ["Creating the image element and setting it's src attribute"](#Creating the image element and setting it's src attribute)
- Great, so I now know how to create the `<li>` tag, now to put the text inside
  of the `<li>` tag
- I take the hint to lookup `innerHTML` and google for `javascript innerHTML`
- I see that the first result is
  "[HTML DOM innerHTML Property - W3Schools](http://www.w3schools.com/jsref/prop_html_innerhtml.asp)"
  - Looking at the example, it seems that I set the `innerHTML` property like
    this:
    ```js
    element.innerHTML = "Text"
    ```
  - So in order to put the the username and new message text into the `<li>`,
    I can do the following:

    ```js
    var newLi = document.createElement("li");
    newLi.innerHTML = usernameInputValue + " : " + messageInputValue;
    ```
- Putting it all together I get
  ```js
  window.onload = function() {
    var submitButton = document.getElementById("submitButton");

    submitButton.onclick = function() {
      var messageInput = document.getElementById('messageInput');
      var messageInputValue = messageInput.value;
      alert("The new message is " + messageInputValue);

      var usernameInput = document.getElementById("usernameInput");
      var usernameInputValue = usernameInput.value;
      alert("The username is " + usernameInputValue);

      var newLi = document.createElement("li");
      newLi.innerHTML = usernameInputValue + " : " + messageInputValue;
    }
  }
  ```

## Challenge: Adding the newly created message input to the page

```
Challenge Time!
            __
           / _)
    .-^^^-/ /
 __/       /
 <__.|_|-|_|


We have successfull created a new `<li>` element, we now need to add this to
our `<ul>`. Can you do it?!
```

## Solution:  Adding the newly created message input to the page

You can checkout "[Actually adding the image element to the page](#Actually adding the image element to the page)" for an explanation:

```js
window.onload = function() {
  var submitButton = document.getElementById("submitButton");

  submitButton.onclick = function() {
    var messageInput = document.getElementById('messageInput');
    var messageInputValue = messageInput.value;
    alert("The new message is " + messageInputValue);

    var usernameInput = document.getElementById("usernameInput");
    var usernameInputValue = usernameInput.value;
    alert("The username is " + usernameInputValue);

    var newLi = document.createElement("li");
    newLi.innerHTML = usernameInputValue + " : " + messageInputValue;

    var messageList = document.getElementById("messageList");
    messageList.appendChild(messageElement);
  }
}
```

And then removing the `alert` messages

```js
window.onload = function() {
  var submitButton = document.getElementById("submitButton");

  submitButton.onclick = function() {
    var messageInput = document.getElementById('messageInput');
    var messageInputValue = messageInput.value;

    var usernameInput = document.getElementById("usernameInput");
    var usernameInputValue = usernameInput.value;

    var newLi = document.createElement("li");
    newLi.innerHTML = usernameInputValue + " : " + messageInputValue;

    var messageList = document.getElementById("messageList");
    messageList.appendChild(messageElement);
  }
}
```

## Huzzah! We're finished!

<!--TODO: Celebrate Gif!-->

## Extra Stuffs

```
Challenge Time!
            __
           / _)
    .-^^^-/ /
 __/       /
 <__.|_|-|_|

Instead of clicking a button in order to add a new message, how do you make it
submit by pressing enter?
```

```js
window.onload = function() {
  var messageInput = document.getElementById("messageInput");

  messageInput.onkeypress = function(e) {
    if (e.keyCode === 13) { // this can be added later.
      var messageInput = document.getElementById('messageInput');
      var messageInputValue = messageInput.value;

      var usernameInput = document.getElementById("usernameInput");
      var usernameInputValue = usernameInput.value;

      var newLi = document.createElement("li");
      newLi.innerHTML = usernameInputValue + " : " + messageInputValue;

      var messageList = document.getElementById("messageList");
      messageList.appendChild(messageElement);
    }
  }
}
```

```
Challenge Time!
            __
           / _)
    .-^^^-/ /
 __/       /
 <__.|_|-|_|

Can you make it work if you pressed enter OR clicked on a button?
```

```js
window.onload = function() {
  var messageInput = document.getElementById("messageInput");
  var submitButton = document.getElementById("submitButton");

  messageInput.onkeypress = function(e) {
    if (e.keyCode === 13) { // this can be added later.
      submitMessage()
    }
  }

  submitButton.onclick = function() {
    submitMessage()
  }

  function submitMessage() {
    var messageInput = document.getElementById('messageInput');
    var messageInputValue = messageInput.value;

    var usernameInput = document.getElementById("usernameInput");
    var usernameInputValue = usernameInput.value;

    var newLi = document.createElement("li");
    newLi.innerHTML = usernameInputValue + " : " + messageInputValue;

    var messageList = document.getElementById("messageList");
    messageList.appendChild(messageElement);
  }
}
```
