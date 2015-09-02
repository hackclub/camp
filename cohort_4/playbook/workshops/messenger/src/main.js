window.onload = function() {

  // I have to reference everything first before I can interact with it
  var usernameInput = document.getElementById("usernameInput");
  var messageInput = document.getElementById("messageInput");
  var messageList = document.getElementById("messageList");
  var submitButton = document.getElementById("submitButton");

  submitButton.onclick = function() {
    debugger
    var username = usernameInput.value;
    if (username === "") {
      username = "anonymous"
    }
    var message = messageInput.value;

    var messageElement = document.createElement("li");
    var textNode = document.createTextNode(username + ": " + message);
    messageElement.appendChild(textNode);
    messageList.appendChild(messageElement);
  }
}
