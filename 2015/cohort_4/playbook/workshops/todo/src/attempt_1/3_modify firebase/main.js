window.onload = function() {

  var firebase = new Firebase("https://camp-todo.firebaseio.com/");
  var newButton = document.getElementById("new-button");
  var todoList = document.getElementById("todo-list")

  function createTaskElement(description, isDone) {
    var li = document.createElement("li");

    var input = document.createElement("input");
    input.setAttribute("class", "toggle");
    input.setAttribute("type", "checkbox");
    input.checked = isDone;

    var span = document.createElement("span");
    var textNode = document.createTextNode(description);
    span.appendChild(textNode);

    li.appendChild(input);
    li.appendChild(span)

    return li
  }

  function addTaskToList(description, isDone) {
    var taskElement = createTaskElement(description, isDone);
    todoList.appendChild(taskElement);
  }

  function createTask() {
    var taskDescription = prompt("Add a task:");

    if (taskDescription !== null && taskDescription !== "") {
      var task = {}
      task.description = taskDescription;
      task.isDone = false;
      
      firebase.push(task);
    }
  }
  
  newButton.onclick = createTask

  firebase.on('child_added', function (snapshot) {
    var task = snapshot.val();
    addTaskToList(task.description, task.isDone);
  });


}
