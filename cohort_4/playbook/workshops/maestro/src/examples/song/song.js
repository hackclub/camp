var phone = prompt("Think of a friend that could use an music energy boost? What is their phone number?");
var activity = prompt("What kind of activity do they need an energy boost for? Types of activities include party, study, and love.");

maestro.Twilio.sendSms(phone, "I thought you could use an energy boost...");

if (activity === "party") {
	maestro.Twilio.callAndPlay(phone, "http://mp3light.net/assets/songs/20000-20999/20724-tik-tok-kesha--1411570590.mp3");
}
else if (activity === "study") {
	maestro.Twilio.callAndPlay(phone, "http://a.tumblr.com/tumblr_lie8ewfdbO1qzbwpvo1.mp3");
}
else if (activity === "love") {
	maestro.Twilio.callAndPlay(phone, "http://prv.mp3caprice.com/preview/111/816/1.mp3");
}
else {
	maestro.Twilio.callAndPlay(phone, "http://mc01.userfiles.me/m/0/1395096936/38743662/64/2dc38b310bdac571fb2400696bd08265/Pharrell_Williams-Happy_-spaces.ru.mp3");
}

alert("Great! We'll give " + phone + " a ring!");