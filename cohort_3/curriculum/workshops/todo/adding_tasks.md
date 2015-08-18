# Adding Tasks

I want to be able to add a new task to the list when I click on the `+` button.

## Demo

[Here is a
demo](https://rawgit.com/hackedu/hack-camp/da57a764777c6402bd00dd88cd8775ccf8534e00/cohort_3/curriculum/workshops/todo/src/attempt_2/v2_2_javascript_adding_checkpoint/index.html)
of what we're going to do in this version.

- you can click the button to add a task
- it creates a new element for each task created

Note that it does NOT

- remember anything that you create

## Making sure `main.js` is connected

The first thing I will test to see if `main.js` is even linked properly from the
`index.html` file so I run an alert.

```js
alert("alert from main.js");
```

```
Check
Point!
            __
           / _)
    .-^^^-/ /
 __/       /
<__.|_|-|_|

See if you get an alert in your code.

```

If I see the alert popup, you will know that that `main.js` is linked properly.

## Doing something when the button is clicked

I want to get a simple example working where if I click on the new task button it makes a simple alert.

### Targeting the button

I need to get able to target the button with an id in the `index.html`

![](http://zippy.gfycat.com/CompleteNegativeGoshawk.gif)

### Running the Javascripts only *AFTER* the page loads

I first want to make sure that all of my javascript code only runs *after*
my page finishes loading so I put everything in a `window.onload`

```js
window.onload = function() {

}
```

### newTaskButton.onclick

- Targeting the button
- Doing something (making an alert) when I click on it.

```javascript
window.onload = function() {
  var newTaskButton = document.getElementById("new-task-button");
  //                  ^ this function finds the element with the id "new-task-button"

  newTaskButton.onclick = function() {
    // ^ this makes it when I click on the button, it will perform the below actions
    alert("Create A New Task!");
  }
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

See if you can get your code to make an alert when a button is clicked.

```

## Adding a task to the task list

In the `index.html`, the place that I want to add new tasks to is inside of `ul`
element

```html
<!-- Task List -->
<ul id="todo-list">
</ul>
```

- Initially it will start out empty.
- then when I add a new task say, "take out the trash", I will need to append an
  `li` element to id like so:

```html
<!-- Task List -->
<ul id="todo-list">
  <li>
    <input class="toggle" type="checkbox">
    <span>Take out the trash</span>
    <img class="delete" src="https://i.imgur.com/BtLxCD6.png">
  </li>
</ul>
```

And when I add another task, say "Clean out fridge", I will need to add another
`li` element

```html
<!-- Task List -->
<ul id="todo-list">
  <li>
    <input class="toggle" type="checkbox">
    <span>Take out the trash</span>
    <img class="delete" src="https://i.imgur.com/BtLxCD6.png">
  </li>
  <li>
    <input class="toggle" type="checkbox">
    <span>Clean out fridge</span>
    <img class="delete" src="https://i.imgur.com/BtLxCD6.png">
  </li>
</ul>
```

### Adding a task when the button is clicked

Every time the button is clicked, let's append a new `<li>` tag to the `<ul>`

```javascript
window.onload = function() {
  var newTaskButton = document.getElementById("new-task-button");
  var todoList = document.getElementById("todo-list");
  //  ^ get the <ul> element that we want to add our <li> elements to

  newTaskButton.onclick = function() {
    //=======================================
    // Making the <li> element

    var li = document.createElement("li");
    //       ^ this function will create a new <li></li> element

    //=======================================
    // Appending the <li> element to the <ul>
    todoList.appendChild(li);

    // this adds the <li> tag into the <ul> so it looks like this
    /*
      <ul id="todo-list">
        <li></li>
      </ul>
    */
  }
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

Type the above code (ignore comments & don't copy and paste)
into your project.

Make sure you are able to use this code to make it so that
when you click on the new task button, it makes an empty new task.

```

### Now let's add a task name to the tasks that are created!

```javascript
window.onload = function() {
  var newTaskButton = document.getElementById("new-task-button");
  var todoList = document.getElementById("todo-list");

  newTaskButton.onclick = function() {
    var li = document.createElement("li");
    todoList.appendChild(li);

    //=======================================
    // Making the <span> tag

    var span = document.createElement("span");
    //         ^ this function will output us a <span></span> element

    // which we need to set the innerHTML of to the TASK NAME
    span.innerHTML = "TASK NAME";
    // which means that the <span> will now look like this:
    // <span>TASK NAME</span>

    li.appendChild(span);
    /* The <li> tag now looks like this:
        <li>
            <span>TASK NAME</span>
        </li>

        And so the <ul> tag that the <li> tag is in now looks like this:
          <ul id="todo-list">
            <li>
              <span>TASK NAME</span>
            </li>
          </ul>
    */
  }
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

Type the above code (ignore comments & don't copy and paste) into your
project.

Make sure you are able to use this code to make it so that when you click on
the new task button, it makes a task that says `TASK NAME`

```

### Now let's also add a checkbox

```javascript
window.onload = function() {
  var newTaskButton = document.getElementById("new-task-button");
  var todoList = document.getElementById("todo-list");

  newTaskButton.onclick = function() {
    var li = document.createElement("li");
    todoList.appendChild(li);

    //=======================================
    // Making the inner <input> tag

    var input = document.createElement("input");
    //          ^ this function will output us an <input> element

    // and we also need to set it's class attribute of "toggle"
    input.setAttribute("class", "toggle");
    // which means that input now looks like this:
    // <input class="toggle">

    // and set it's type attribute to "checkbox"
    input.setAttribute("type", "checkbox");
    // which means that input now looks like this:
    // <input class="toggle" type="checkbox">

    li.appendChild(input);

    var span = document.createElement("span");
    span.innerHTML = "TASK NAME";
    li.appendChild(span);

    /* The <li> tag now looks like this:

        <li>
            <span>TASK NAME</span>
            <input class="toggle" type="checkbox">
        </li>

        And so the <ul> tag that the <li> tag is in now looks like this:
          <ul id="todo-list">
            <li>
              <input class="toggle" type="checkbox">
              <span>TASK NAME</span>
            </li>
          </ul>
    */
  }
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

Type the above code (ignore comments & don't copy and paste) into your
project.

Make sure you are able to use this code to make it so that when you click on
the new task button, it makes a task that now has a checkbox.

```

### Now let's also add the delete button

```javascript
window.onload = function() {
  var newTaskButton = document.getElementById("new-task-button");
  var todoList = document.getElementById("todo-list");

  newTaskButton.onclick = function() {
    var li = document.createElement("li");
    todoList.appendChild(li);

    var input = document.createElement("input");
    input.setAttribute("class", "toggle");
    input.setAttribute("type", "checkbox");
    li.appendChild(input);

    var span = document.createElement("span");
    span.innerHTML = "TASK NAME";
    li.appendChild(span);

    //=======================================
    // Making the <img> tag

    var img = document.createElement("img");
    //        ^ this function will output us an <img> element

    // which we need to then set the source of to the delete image
    img.src = "https://i.imgur.com/BtLxCD6.png"
    // which means the <img> will now look like this:
    // <img src="https://i.imgur.com/BtLxCD6.png">

    // and set it's class attribute to "delete"
    img.setAttribute("class", "delete");
    // which means it now looks like:
    // <img src="https://i.imgur.com/BtLxCD6.png" class="delete">

    li.appendChild(img);
    /* The <li> tag now looks like this:

            <li>
                <span>TASK NAME</span>
                <input class="toggle" type="checkbox">
                <img src="https://i.imgur.com/BtLxCD6.png" class="delete">
            </li>

            And so the <ul> tag that the <li> tag is in now looks like this:
              <ul id="todo-list">
                <li>
                  <input class="toggle" type="checkbox">
                  <span>TASK NAME</span>
                  <img src="https://i.imgur.com/BtLxCD6.png" class="delete">
                </li>
              </ul>
        */
  }
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

Type the above code (ignore comments & don't copy and paste) into your
project.

Make sure you are able to use this code to make it so that when you click on
the new task button, it makes a task that now has a delete button
when you hover over the task
```

### Now there seems to be an awful lot of code here, let's move it to a function.

By moving the code into a function, we are able to shorten the code in the `onclick` to this:

```
newTaskButton.onclick = function() {
  addNewTask();
};
```

This is the original code:

```javascript
window.onload = function() {
  var newTaskButton = document.getElementById("new-task-button");
  var todoList = document.getElementById("todo-list");

  newTaskButton.onclick = function() {
    var li = document.createElement("li");
    todoList.appendChild(li);

    var input = document.createElement("input");
    input.setAttribute("class", "toggle");
    input.setAttribute("type", "checkbox");
    li.appendChild(input);

    var span = document.createElement("span");
    span.innerHTML = "TASK NAME";
    li.appendChild(span);

    var img = document.createElement("img");
    img.src = "https://i.imgur.com/BtLxCD6.png"
    img.setAttribute("class", "delete");
    li.appendChild(img);
  }
}
```

This is the code inside of a function:

```javascript
window.onload = function() {
  var newTaskButton = document.getElementById("new-task-button");
  var todoList = document.getElementById("todo-list");

  function addNewTask() {
    var li = document.createElement("li");
    todoList.appendChild(li);

    var input = document.createElement("input");
    input.setAttribute("class", "toggle");
    input.setAttribute("type", "checkbox");
    li.appendChild(input);

    var span = document.createElement("span");
    span.innerHTML = "TASK NAME";
    li.appendChild(span);

    var img = document.createElement("img");
    img.src = "https://i.imgur.com/BtLxCD6.png"
    img.setAttribute("class", "delete");
    li.appendChild(img);
  }

  newTaskButton.onclick = function() {
    addNewTask();
  }
}
```

And now instead of calling every new task `TASK NAME` every time,
we can make `addNewTask` take an input of `taskName`.

Also note, that `<-- CHANGE` means that this is a line that was added.

```javascript
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
    addNewTask("NEW TASK"); // <-- CHANGE
  }
}
```

```text
Check
Point!
            __
           / _)
    .-^^^-/ /
 __/       /
<__.|_|-|_|

<<<<<<< HEAD
=======
Try moving your code to a separate function too! Make sure the code works!
This part is a little confusing so please ask us for clarifications as well!
```

## Adding a custom task to the task list

We've now need to prompt the user to type in their own task name:

```javascript
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
    var taskName = prompt("Add a task:")  // <-- CHANGE
    addNewTask(taskName);
  }
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

Now in your code, try prompting the user for a task name and have that become the task name!

```

## What if you enter empty text or press `cancel`

- If you press enter without any text, the `prompt` function returns an empty string as an output.
- If you press cancel, prompt returns `null` as an output.

And so if the text is not `null` AND the task name is not an empty string, only then create a new task.

```javascript
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
    if (taskName !== null && taskName !== "") { // <-- CHANGE
//      ^ the person did NOT press cancel
//                                  ^ the person that presses enter with nothing
      addNewTask(taskName);
    } // <-- CHANGE
  }
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

Now in your code, try making sure that if the user press cancel or has a blank
task name, it does not create a new task.

```

## Final code

Your final code should look like this:

```js
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
    var taskName = prompt("Add a task:")  // <-- CHANGE

    if (taskName !== null && taskName !== "") { // <-- CHANGE
      addNewTask(taskName);
    }
  }
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

Make sure your code functions like the demo:
```

[Link to demo](https://rawgit.com/hackedu/hack-camp/da57a764777c6402bd00dd88cd8775ccf8534e00/cohort_3/curriculum/workshops/todo/src/attempt_2/v2_2_javascript_adding_checkpoint/index.html
)

## Next

The next thing we want to do is try to make this work with firebase!

Next: [Adding Firebase](write_to_firebase.md).
