function createTaskElement(taskString) {

  var li = document.createElement("li");

  var input = document.createElement("input");
  input.setAttribute("class", "toggle");
  input.setAttribute("type", "checkbox");

  var span = document.createElement("span");
  span.appendChild(document.createTextNode(taskString));

  li.appendChild(input);
  li.appendChild(span)

  return li
}

function main() {

  var newButton = document.getElementById("new-button");
  var todoList = document.getElementById("todo-list")

  function createTask() {
    var taskString = prompt("Add a task:");

    if (taskString !== null && taskString !== "") {
      var taskElement = createTaskElement(taskString);
      todoList.appendChild(taskElement);
    }
  }
  
  newButton.onclick = createTask
}

window.onload = main;
