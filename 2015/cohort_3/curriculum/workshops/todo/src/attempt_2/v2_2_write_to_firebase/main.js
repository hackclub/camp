var firebaseRootUrl = "https://jonathan-todo.firebaseio.com/"
var firebaseRoot = new Firebase(firebaseRootUrl);

window.onload = function() {
  var newTaskButton = document.getElementById("new-task-button");
  var todoList = document.getElementById("todo-list");
  
  function addNewTask(taskName) { // <-- CHANGE
    var li = document.createElement("li");
    todoList.appendChild(li);

    var input = document.createElement("input");
    input.setAttribute("class", "toggle");
    input.setAttribute("type", "checkbox");
    li.appendChild(input);

    var span = document.createElement("span");
    span.innerHTML = taskName; // <-- CHANGE
    li.appendChild(span);

    var img = document.createElement("img");
    img.src = "https://i.imgur.com/BtLxCD6.png"
    img.setAttribute("class", "delete");
    li.appendChild(img);
  }

  newTaskButton.onclick = function() {
    var taskName = prompt("Add a task:")
    if (taskName !== null && taskName !== "") {
      addNewTask(taskName);

      var task = {}
      task.name = taskName;
      task.done = false; 

      firebaseRoot.push(task);
    }
  }
  
}