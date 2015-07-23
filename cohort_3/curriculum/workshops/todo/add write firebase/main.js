var firebase = new Firebase("https://camp-todo.firebaseio.com/");

function createTaskElement(taskString) {

  var li = document.createElement("li");

  var input = document.createElement("input");
  input.setAttribute("class", "toggle");
  input.setAttribute("type", "checkbox");

  var span = document.createElement("span");
  span.innerHTML = taskString;

  li.appendChild(input);
  li.appendChild(span)

  return li
}

function main() {

  var newButton = document.getElementById("new-button");
  var todoList = document.getElementById("todo-list")

  function createTask() {
    var taskDescription = prompt("Add a task:");

    var task = {}
    task.description = taskDescription;
    task.done = false;

    firebase.push(task);

    if (taskDescription !== null && taskDescription !== "") {
      var taskElement = createTaskElement(taskDescription);
      todoList.appendChild(taskElement);
    }
  }
  
  newButton.onclick = createTask
}

window.onload = main;