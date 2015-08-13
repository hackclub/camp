# Loading Data from Firebase

Right underneath the end of the `newTaskButton.onclick = function() {`
there is some new code that you should type into your project `// NEW SECTION`:

```js
var firebaseRootUrl = "https://jonathan-todo.firebaseio.com/"
var firebaseRoot = new Firebase(firebaseRootUrl);

window.onload = function() {
  var newTaskButton = document.getElementById("new-task-button");
  var todoList = document.getElementById("todo-list");

  function addNewTask(taskName) { // <-- CHANGE
    ...
  }

  newTaskButton.onclick = function() {
    ...
  }

  // NEW SECTION
  firebaseRoot.on('child_added', function (snapshot) {
    var task = snapshot.val();
    addNewTask(task.name);
  });
}
```

```
Check
Point!
            __
           / _)
    .-^^^-/ /
 __/       /
<__.|_|-|_|

Try adding this NEW SECTIon of code into yours and watch it load your todo
tasks from your database! (make sure there are tasks in your database for it
to load)

```

## Understanding the code

```js
  firebaseRoot.on('child_added', function (snapshot) {
    // ^ this is saying that whenever anything has been "pushed" to
    //   the firebase root ("child_added" means that something has
    //   been pushed into the root) run the below code

    var task = snapshot.val();
    //  ^ loads task that was "pushed" into the firebase
    // a task may look like
    //      {name: "Take Over The World", status: false}

    addNewTask(task.name);
    // ^ addNewTask is the function we made before that
    //   creates the new <li> element with the task name set

  });
```

## The entire code

***(Note that there is currently a small error in this code)***

```js
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

  firebaseRoot.on('child_added', function (snapshot) {
    var task = snapshot.val();
    addNewTask(task.name);
  });

}
```

## Hmm, I see duplicate data when I create a new task

- This function is called NOT just for subsequent pushes to the database
- this function is called for EVERY element that has ever been pushed to the  database

For example, if your database had these tasks in it
- {name: "Take Over The World", status: false}
- {name: "Buy A New Cat with Lasers", status: false}
- {name: "Replace Dead Sharks", status: false}

`firebaseRoot.on('child_added')...` will run for all 3 of them, *EVERY* time the page loads.

I'll repeat that one more time: `firebaseRoot.on('child_added')...` will run for all 3 of them, *EVERY* time the page loads.

If you look carefully at our code:

```js
...
  newTaskButton.onclick = function() {
    var taskName = prompt("Add a task:")
    if (taskName !== null && taskName !== "") {
      addNewTask(taskName); // <-- HERE

      var task = {}
      task.name = taskName;
      task.done = false;

      firebaseRoot.push(task);
    }
  }

  firebaseRoot.on('child_added', function (snapshot) {
    var task = snapshot.val();
    addNewTask(task.name); // <-- HERE
  });
```

We see that `addNewTask` is called in the `newTaskButton.onclick`
which will add an <li> element for the new task.

However, in the same `newTaskButton.onclick`, we do a `firebaseRoot.push(task);` which triggers `firebaseRoot.on('child_added'` to run, which ALSO calls `addNewTask`. Therefore `addNewTask` is called twice for new tasks that are created.

And so we can remove it from `newTaskButton.onclick` leaving us with this working code:

```js
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
      var task = {}
      task.name = taskName;
      task.done = false;

      firebaseRoot.push(task);
    }
  }

  firebaseRoot.on('child_added', function (snapshot) {
    var task = snapshot.val();
    addNewTask(task.name);
  });

}
```

```
Check
Point!
            __
           / _)
    .-^^^-/ /
 __/       /
<__.|_|-|_|

Try it out! See if as you add tasks, it is reflected even after you refresh
the page.

```

## Next

So it would be cool if I could delete tasks now!

Next: [Deleting Tasks](deletion.md)
