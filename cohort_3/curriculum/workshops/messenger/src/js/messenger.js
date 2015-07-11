var messagesRef = new Firebase("https://hack-camp-messenger.firebaseio.com/");

var usernameField = $("#usernameInput");
var messageField = $("#messageInput");
var messageList = $("#messages");

var messageListKeypress = function (e) {
  if (e.keyCode == 13) { // if user presses enter
    var username = usernameField.val();
    var message = messageField.val();

    messagesRef.push({
      name: username,
      text: message
    });
    messageField.val('');
  }
};

messagesRef.limitToLast(10).on('child_added', function (snapshot) {
  var data = snapshot.val();
  var username = data.name || "anonymous";
  var message = data.text;

  var messageElement = $("<li>");
  var usernameElement = $('<strong class="messenger-username"></strong>');
  usernameElement.text(username);
  messageElement.text(message);
  messageElement.prepend(usernameElement);

  // Add message to list
  messageList.append(messageElement);

  // Scroll to bottom of message list
  messageList[0].scrollTop = messageList[0].scrollHeight;
});
