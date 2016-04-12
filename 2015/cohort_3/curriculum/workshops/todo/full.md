## Incomplete Edit Version

```js
var FIREBASE_ROOT = "https://camp-todo.firebaseio.com/"

window.onload = function() {

  var firebase = new Firebase(FIREBASE_ROOT);
  var newButton = document.getElementById("new-button");
  var todoList = document.getElementById("todo-list")

  function updateTask(key, isDone) {
    var taskUrl = FIREBASE_ROOT + key;
    var taskRef = new Firebase(FIREBASE_ROOT + key);
    
    var data = {
      isDone: isDone
    }

    taskRef.update(data);
  }

  function createTaskElement(description, isDone, key) {
    var li = document.createElement("li");
    li.setAttribute("key", key);

    var input = document.createElement("input");
    input.setAttribute("class", "toggle");
    input.setAttribute("type", "checkbox");
    input.checked = isDone;

    input.onchange = function() {
      var isDone = this.checked
      var li = this.parentElement;
      var key = li.getAttribute("key");

      updateTask(key, isDone);
    }

    var span = document.createElement("span");
    span.innerHTML = description;

    li.appendChild(input);
    li.appendChild(span)

    return li
  }

  function addTaskToList(description, isDone, key) {
    var taskElement = createTaskElement(description, isDone, key);
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
    addTaskToList(task.description, task.isDone, snapshot.key());
  });

  firebase.on('child_changed', function (snapshot) {
    var task = snapshot.val();
    var key = snapshot.key();

    var li = document.querySelector("[key=" + key + "]")
    var checkbox = li.childNodes[0];
    checkbox.checked = task.isDone;
  })


}
```

## Full Complete Edit & Delete Version

```js
var FIREBASE_ROOT = "https://camp-todo.firebaseio.com/"

window.onload = function() {

  var firebase = new Firebase(FIREBASE_ROOT);
  var newButton = document.getElementById("new-button");
  var todoList = document.getElementById("todo-list")

  function createTask(taskDescription) {
    var task = {}
    task.description = taskDescription;
    task.isDone = false;
    
    firebase.push(task);
  }

  function deleteTask(key) {
    var taskURL = FIREBASE_ROOT + key;
    var taskRef = new Firebase(FIREBASE_ROOT + key);

    taskRef.remove();
  }

  function updateTask(key, isDone) {
    var taskUrl = FIREBASE_ROOT + key;
    var taskRef = new Firebase(FIREBASE_ROOT + key);
    
    var data = {
      isDone: isDone
    }

    taskRef.update(data);
  }

  function createTaskElement(description, isDone, key) {
    var li = document.createElement("li");
    li.setAttribute("key", key);

    var input = document.createElement("input");
    input.setAttribute("class", "toggle");
    input.setAttribute("type", "checkbox");
    input.checked = isDone;

    input.onchange = function() {
      var isDone = this.checked
      var li = this.parentElement;
      var key = li.getAttribute("key");

      updateTask(key, isDone);
    }

    var span = document.createElement("span");
    span.innerHTML = description;

    var del = document.createElement("img");
    del.src = "img/delete.png";
    del.setAttribute("class", "delete");

    del.onclick = function() {
      var li = this.parentElement;
      var key = li.getAttribute("key");

      deleteTask(key);
    }

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(del);

    return li
  }

  newButton.onclick = function() {
    var taskDescription = prompt("Add a task:");
    if (taskDescription !== null && taskDescription !== "") {
      createTask(taskDescription);
    }
  }

  firebase.on('child_added', function (snapshot) {
    var task = snapshot.val();
    var key = snapshot.key();
    var taskElement = createTaskElement(task.description, task.isDone, key);
    todoList.appendChild(taskElement);

  });

  firebase.on('child_changed', function (snapshot) {
    var task = snapshot.val();
    var key = snapshot.key();

    var li = document.querySelector("[key=" + key + "]");
    var checkbox = li.childNodes[0];
    checkbox.checked = task.isDone;
  });

  firebase.on('child_removed', function (snapshot) {
    var key = snapshot.key();
    var taskElement = document.querySelector("[key=" + key + "]");
    todoList.removeChild(taskElement);
  });



}
```

