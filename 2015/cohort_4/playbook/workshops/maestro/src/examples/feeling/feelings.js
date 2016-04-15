var phone = prompt("What is your friend's phone number?");
var feeling = prompt("How does your friend make you feel? Possible feelings include happy, special, and safe.");

if (feeling === "happy") {
	maestro.Twilio.sendMms(phone, "http://cdn.meme.am/instances/61188073.jpg");
}
else if (feeling === "special") {
	maestro.Twilio.sendMms(phone, "http://www.mememaker.net/static/images/memes/4138705.jpg");
}
else if (feeling === "safe") {
	maestro.Twilio.sendMms(phone, "http://ih0.redbubble.net/image.4149579.6742/flat,800x800,070,f.jpg");
}
else {
	maestro.Twilio.sendMms(phone, "http://4.bp.blogspot.com/-7zdzQsTt99k/U0c6xmLXOwI/AAAAAAAAAIQ/-2M0tNNNHIY/s1600/you+are+awesome.jpg")
}

alert("Great! We just sent an appropriate photo to " + phone);