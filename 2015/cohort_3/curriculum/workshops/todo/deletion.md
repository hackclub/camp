# Deleting tasks

> For the record, we don't expect you to get up to here : )

For a given task, when we click on the delete button, we want that item

1. Removed from the screen
2. Removed from the database

Let's build the scooter first and make it when you click the delete button, it displays an alert

## Clicking on the delete button

To get this to work, *EVERY* <img> tag needs to have it's own `onclick` that then calls a function to do something. See the bottom of this function

```js
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

  // NEW CODE STARTS HERE
  img.onclick = function() {
    alert("I want to be deleted!")
  }
}
```

```
Check Point!  
Time        __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

Try seeing if you can make an alert popup when you click the delete button

```

## Removing the element from the page

Ok, so instead of an alert, lets see if we can write some code that removes the
item from the screen (and not yet firebase).

So in order to delete yourself, you must say `parent.removeChild(childElement)`

Therefore inside of the `img.onclick function`, we have to somehow find a way
to access the parent. Turns out that we can refer to the image itself that we
clicked on with the keyword `this` and then if we ask for it's `parentElement`
attribute with `this.parentElement` it will give us the `<li>` element.

We then need to ask the `<ul>` (`todoList`) to remove the child `parentElement`

```js
img.onclick = function() {
  var parentLiElement = this.parentElement;
  //                  ^ "this" refers to the image that you clicked
  //                  ^ "this.parentElement" refers to 
  //                     what image is inside of, an <li> element
  todoList.removeChild(parentLiElement);
  // ^ this refers to the <li> element and is calling a function to remove the image
}
```

<div style="padding-left: 10px; padding-right: 10px; background-color: #EEE;"><div style="display: inline-block;">![](https://i.imgur.com/wd2Ac0Q.png)</div><div style="display: inline-block;"><p style="position: relative; top: 22px; left: 8px;">
***Give this a shot but this is kinda really confusing so please ask for help!***</p>  
</div></div>

```
Check Point@  
Time        __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

Give this a shot but this is kinda really confusing so please ask for help!

```

## Removing It From Firebase

We have successfully removed it from the view but if we refresh the page, it appears again because we did not remove it from Firebase.

The easiest way to find something and manipulate (say delete) it in Firebase is with a key.

Every item we push to Firebase is assigned a unique key (think serial number)
that you can use to find that item in Firebase.

For us, we need to somehow remember what the key is for every task. We can do this by setting an attribute value, `key` in every <li> element in the `firebaseRoot.on('child_added')` part of the code like so:

```html
<li key="-Oe9fo8jslkfeddm">
  <input class="toggle" type="checkbox">
  <span>Take out the trash</span>
  <img class="delete" src="https://i.imgur.com/BtLxCD6.png">
</li>

```

In the above example, if I need to know the associated Firebase key of the `<li>` element, I can just find the `<li>` element and use `li.getAttribute('key')`

Also the `addNewTask` function will need an additional parameter to take a `key`

This is getting really hard to explain so here is the full code:

```js
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
```

Next: [I will just give you the final version of the code ](full.md). (Note that there are some inconsistencies between this version and the next version)
