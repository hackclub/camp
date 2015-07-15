# Maestro + webpage workshop

In this workshop we'll be introducting the JavaScript programming language and
building a simple website that sends people text messages.

## Website bootstrap

Let's jump right into it and get started!

- Open your `hack-camp` Cloud9 workspace and create a new folder called
  `texting-site`
  - This is similar to how you set up your `portfolio` folder for the previous
    workshop
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

- Between the `<head>` tags, let's go ahead and create a `<script>` tag with an
  attribute `src` set to `https://maestro.ngrok.com/static/baton.js`
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <script src="https://maestro.ngrok.com/static/baton.js"></script>
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

- Quickly check that everything is working by doing the following:
  - Open your website, right click on the page, click 'Inspect Element', and click
    'Console'
  - In the console type in `maestro.Twilio.sendSms('415-555-5555', 'How is your
    day?')`, replacing the phone number with your own phone number, and then hit
    enter. You should receive a text message sent to your phone.
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
      <script src="https://maestro.ngrok.com/static/baton.js"></script>
      <script src="js/script.js"></script>
    </head>
    <body>
    </body>
  </html
  ```

## Texting with programming for fun and profit

Great! Now that we've told the browser about Maestro and the JavaScript file we
created, it's time to do some evil magic.

### Input boxes

- Between the `<body>` tags go ahead and add two `<input type="text">` tags (one
  for recipient phone number, one for message)
  - The HTML `<input>` element is used to accept data from the user
  - `<input>` tags are self-closing, so don't add a closing `</input>` to the
    end
- Give one input an `id` attribute equal to `phone-number` and the other input
  an `id` of `message`
  - The id attribute of an HTML element is used to select a specific element.
  - An id should be unique within a page, so it is used if you want to select a
    single element

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <script src="https://maestro.ngrok.com/static/baton.js"></script>
      <script src="js/script.js"></script>
    </head>
    <body>
      <input type="text" id="phone-number">
      <input type="text" id="message">
    </body>
  </html
  ```

### Button that does something when clicked

- In `script.js`, add the following:
  ```js
  var sendText = function() {
    alert('button pressed!');
  };
  ```
  - This creates a new function `sendText()`
  - A function is a snippet of code we can run by typing the name of the
    function and `()` behind it
  - This function will send a pop-up to the user that says `button pressed!`

- Under the two inputs we created, create a `<button>Click me</button>`
  - The HTML `<button>` element is a clickable button, <button>like this</button>
- Give the button an `onclick` attribute equal to `sendText();`
  - This tells our button to run our `sendText()` function right when clicked

  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <script src="https://maestro.ngrok.com/static/baton.js"></script>
    <script src="js/script.js"></script>
  </head>
  <body>
    <input type="text" id="phone-number">
    <input type="text" id="message">
    <button onclick="sendText();">Click me</button>
  </body>
  </html>
  ```

- Press the button on your website
  - Anything you put inside the `sendText` function will be run when you click
    the button

### Something that sends a text when button is pressed

- In the `sendText` function in `script.js` add
  `maestro.Twilio.sendSms('415-555-5555', 'You pressed a button!')` replacing
  the `415-555-5555` number with your own phone number
- Press the button.

**Challenge:** Call your phone number and say "You pressed a button!". Hint:
  documentation for Maestro is over at
  https://github.com/TheThirdOne/maestro/blob/cleanup/docs.md

### Function that takes number and message from input boxes

- Type a sample number and message into your input boxes on the page
- Open your browser console by right clicking on your website, clicking inspect
  element, and clicking `Console`
- Type `var phoneInput = document.getElementById('phone-number')`
  - This makes a variable `phoneInput` and sets it equal to our input tag with
    an `id` of `phone-number`
- Type `var phoneNumber = phoneInput.value`
  - This makes a new variable `phoneNumber` and sets it equal to the value of
    our `phoneInput` input box.
- Go ahead and add the `phoneInput` and `phoneNumber` variables to your code:

  ```js
  var sendText = function(){
    alert('button pressed!');
    var phoneInput = document.getElementById('phone-number');
    var phoneNumber = phoneInput.value;
    maestro.Twilio.sendSms(phone-number, 'You pressed a button!');
  };
  ```

- Do the same with a `message` variable equal to the message input box

  ```js
  var sendText = function(){
    alert('button pressed!');
    var phoneInput = document.getElementById('phone-number');
    var phoneNumber = phoneInput.value;
    var messageInput = document.getElementById('message');
    var message = messageInput.value;
    maestro.Twilio.sendSms('415-555-5555', 'You pressed a button!');
  };
  ```

- Replace the values in `maestro.Twilio.sendSms('415-555-5555, 'You pressed a
  button!')` with the variables `phoneNumber` and `message`

  ```js
  var sendText = function(){
    alert('button pressed!');
    var phoneInput = document.getElementById('phone-number');
    var phoneNumber = phoneInput.value;
    var messageInput = document.getElementById('message');
    var message = messageInput.value;
    maestro.Twilio.sendSms(phoneNumber, message);
  };
  ```
### Clearing the input boxes after sending

Now let's clear the message box after sending.

- Right after our `maestro.Twilio.sendSms(phoneNumber, message);` line, set the
  value of message equal to `''`

  ```js
  var sendText = function(){
    alert('button pressed!');
    var phoneInput = document.getElementById('phone-number');
    var phoneNumber = phoneInput.value;
    var messageInput = document.getElementById('message');
    var message = messageInput.value;
    maestro.Twilio.sendSms(phoneNumber, message);
    document.getElementById('message').value = '';
  };
  ```