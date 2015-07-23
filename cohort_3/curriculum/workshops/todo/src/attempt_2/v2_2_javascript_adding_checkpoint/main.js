window.onload = function() {

  var newButton = document.getElementById("new-button");
  var todoList = document.getElementById("todo-list")

  function createTaskElement(taskDescription) {
    var li = document.createElement("li");

    var input = document.createElement("input");
    input.setAttribute("class", "toggle");
    input.setAttribute("type", "checkbox");

    var span = document.createElement("span");
    span.innerHTML = taskDescription;

    li.appendChild(input);
    li.appendChild(span)

    return li
  }

  newButton.onclick = function() {
    var taskDescription = prompt("Add a task:");
    if (taskDescription !== null && taskDescription !== "") {
      var taskElement = createTaskElement(taskDescription);
      todoList.appendChild(taskElement);
    }
  }
  
}