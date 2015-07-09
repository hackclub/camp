# Maestro + webpage workshop

## Website bootstrap

- Open a cloud9 workspace and create a new folder titled `texting-site`
- Inside the folder create a new file called `index.html`
- Make a basic website template with a `<head>` and `<body>`

  ```html
  <!DOCTYPE html>
  <html>
    <head>

    </head>
    <body>

    </body>
  </html>
  ```

- Inbetween `<head>` tags, add `<script></script>` tags with an attribute `src`
  that is equal to `https://maestro.ngrok.com/static/baton.js`
- Open your website, right click on the page, click 'inspect element', and click
  'console'
  - If there are errors, change `https` => `http` in
    the URL 
- In the console, type in `maestro.Twilio.sendSms('415-555-5555', 'How is your
  day?')`, replacing the phone number with your own phone number
- Below the `<script>` tag add a second `<script>` tag in your `<head>` with the
  attribute `src` set to `script.js`
- Create a new file in Cloud9 and name it `script.js`

## Texting with programming for fun and profit

### Input boxes

- In the body, add two `<input type="text">` tags (one for recipient phone
  number, one for message)
  - `<input>` tags are self-closing, so don't add a closing `</input>` to the
    end
- Give one input an `id` attribute equal to `phone-number` and the other input
  an `id` of `message`

### Button that does something when clicked

- Under the two inputs we created, create a `<button>Click me</button>`
- Give the button an `onclick` attribute equal to `sendText();`
- In `script.js`, add the following:

  ```js
  var sendText = function () {
  alert('button pressed!');
  };
  ```

- Press the button on your website
  - Anything you put inside the `sendText` function will be run when you click
    the button

### Something that sends a text when button is pressed

- In the `sendText` function in `script.js` add
  `maestro.Twilio.sendSms('415-555-5555', 'You pressed a button!')` replacing
  the `415-555-5555` number with your own phone number
- Press the button.

### Function that takes number and message from input boxes

- Open your browser console by right clicking on your website, clicking inspect
  element, and clicking `console`
- Type `document.getElementById('phone-number')`
- Type `document.getElementById('phone-number').value`
  - If you press the up arrow when in console it will go back to the last
    command you entered, so you don't need to retype it all
- Type something into your input boxes on the page
- Go back to the console and retype
  `document.getElementById('phone-number').value`
- We'll want to use these values later so in `sendText` set a variable
  `phoneNumber` equal to the phone-number input (make sure to put it before the
  `maestro.Twilio.sendSms`)

  ```js
  var sendText = function () {
    alert('button pressed!');
    var phoneNumber = document.getElementById('phone-number');
    maestro.Twilio.sendSms('415-555-5555', 'You pressed a button!');
  };
  ```

- Do the same with a `message` variable equal to the message input box

  ```js
  var sendText = function () {
    alert('button pressed!');
    var phoneNumber = document.getElementById('phone-number');
    var message = document.getElementById('message');
    maestro.Twilio.sendSms('415-555-5555', 'You pressed a button!');
  };
  ```

- Replace the values in `maestro.Twilio.sendSms('415-555-5555, 'You pressed a
  button!')` with the variables `phoneNumber` and `message`

  ```js
  var sendText = function () {
    alert('button pressed!');
    var phoneNumber = document.getElementById('phone-number').value;
    var message = document.getElementById('message').value;
    maestro.Twilio.sendSms(phoneNumber, message);
  };
  ```
