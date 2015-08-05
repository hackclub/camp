var phone = prompt("Choose a friend to prank call. What is their phone number?");
var message = "Hi this is Sam from 31 Flavors, if you can name 31 Flavors in 31 seconds you can win 31 thousand dollars, ready go!!";
maestro.Twilio.callAndSay(phone, message);
alert(phone + " is being prank called...");