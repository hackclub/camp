var phone = prompt("Choose a friend to send a text message to. What is their phone number?");
var message = prompt("What message do you want to send them?");
maestro.Twilio.sendSms(phone, message);
alert("Your text message has been sent to " + phone);