var firebaseRootUrl = "https://jonathan-todo.firebaseio.com/"
var firebaseRoot = new Firebase(firebaseRootUrl);

window.onload = function() {
  var newTaskButton = document.getElementById("new-task-button");
  var todoList = document.getElementById("todo-list");
  
  function addNewTask(taskName, key) { // <-- CHANGE
    var li = document.createElement("li");
    li.setAttribute("key", key) // <-- CHANGE
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

    img.onclick = function() {
      var parentLiElement = this.parentElement;
      var liKey = parentLiElement.getAttribute("key"); // <-- CHANGE
      var taskUrl = firebaseRootUrl + key; // <-- CHANGE
      var taskRef = new Firebase(taskUrl); // <-- CHANGE
      taskRef.remove(); // <-- CHANGE

      todoList.removeChild(parentLiElement);
    }
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

  firebaseRoot.on('child_added', function (snapshot) {
    var task = snapshot.val();
    var key = snapshot.key();  // <-- CHANGE
    addNewTask(task.name, key); // <-- CHANGE
  });
  
}