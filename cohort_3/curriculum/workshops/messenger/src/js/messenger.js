var messagesRef = new Firebase("https://camp-messenger.firebaseio.com/");

var usernameInput = document.getElementById("usernameInput");
var messageInput = document.getElementById("messageInput");
var messageList = document.getElementById("messages");

var messageListKeypress = function (e) {
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

var writeMessage = function(name, message) {
  var messageElement = document.createElement("li");
  messageElement.innerHTML = name + ": " + message;
  messageList.appendChild(messageElement);
}

messagesRef.limitToLast(10).on('child_added', function (snapshot) {
  var data = snapshot.val();
  writeMessage(data.name, data.message);
});


// var usernameElement = document.createElement("strong");
// usernameElement.setAttribute("class", "messenger-username");
// usernameElement.innerHTML = data.name;
// messageElement.appendChild(usernameElement);

// var textElement = document.createElement("span");
// textElement.innerHTML = data.message;
// messageElement.appendChild(textElement);
