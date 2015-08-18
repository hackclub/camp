# Write To Firebase

In this section, in addition to adding the tasks onto the screen,
we are going to add the tasks into the Firebase database as well.

## Adding the Firebase Library

The first thing you have to do is add the Firebase library.

Add the Firebase library right ***before*** your `script` tag where you add your
main.js

```html
THIS IS THE SCRIPT TAG YOU WANT
<script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js"></script>
```

```html
BEFORE:
...

  <script type="text/javascript" src="main.js"></script>

</body>
</html>
```

```html
AFTER:
...

  <!-- Insert Firebase Library -->
  <script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js"></script>
  <script type="text/javascript" src="main.js"></script>

</body>
</html>

```

This gives you all the Firebase's javascript library which lets you now communicate with Firebase.

## Create your own Firebase account & database

1. Go to `firebase.com`
2. Click "SIGN UP" on the top right
3. Signup with your email & password
4. Type in an App Name, maybe something like `jonathan-todo`

  ![](https://s3.amazonaws.com/f.cl.ly/items/40071v2C1G2C1B223R0q/Image%202015-07-23%20at%207.38.38%20AM.png?t=1437662367304)

5. Click `CREATE NEW APP`

  ![](https://s3.amazonaws.com/f.cl.ly/items/1t030l0i0z0t2l3g3J3I/Image%202015-07-23%20at%207.40.45%20AM.png?t=1437662461738)

6. Note that this creates a fresh new Firebase database
7. In your newly created application click `Manage App`

  ![](https://s3.amazonaws.com/f.cl.ly/items/3V2x3O1b3S270K372H34/Image%202015-07-23%20at%207.42.54%20AM.png?t=1437662591165)

8. Copy the URL in the URL bar of the browser

  ![](https://s3.amazonaws.com/f.cl.ly/items/3O0a2j431e340F2O2Z0y/Image%202015-07-23%20at%207.44.02%20AM.png?t=1437662660398)

9. Leave this Firebase page open (we'll use it later)
10. Open your `main.js` file
11. Write the following 2 lines (ignore the comment) to the very top of `main.js` above `window.onload = function() {`

```js
var firebaseRootUrl = "https://jonathan-todo.firebaseio.com/"
//                    ^ make sure you replace this with your own
var firebaseRoot = new Firebase(firebaseRootUrl);

window.onload = function() {
...

```

As a note `new Firebase(firebaseRootUrl);` makes a new connection to Firebase root.

Now we have a connection into Firebase. The next step is to add data into Firebase. Think about this like a pipe that I can shove or "push" data through to Firebase.

## Adding data into Firebase

All you need to do to get data into Firebase is to

1. Create an object with any properties you want to remember
2. pass the data as an input to the function `firebaseRoot.push()`

As a concrete example, we want to add a new task to Firebase after we prompt the user to add it. Here's a snippet of old code with a comment of where we want to add the new code.

```js
newTaskButton.onclick = function() {
  var taskName = prompt("Add a task:")
  if (taskName !== null && taskName !== "") {
    addNewTask(taskName);
    // WE WANT TO ADD THIS TASK TO FIREBASE ALSO
  }
}
```

So we will add the following code:

```js
var task = {}
    ^ creates a variable called task that points to an empty object

task.name = taskName;
    ^ sets the name property of the task object to whatever the user typed in
      as the task name.
      (remember that taskName points to whatever the user typed)

task.done = false;
    ^ sets the done property to false
      this represents whether this task has been checked off or not

firebaseRoot.push(task);
         ^ this function "pushes" the data to through the pipe to our Firebase database
```

Our final code will now look like this:

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
  
}
```

You should see tasks you created refected in your firebaseRootUrl
afer you add this code.

![](https://i.imgur.com/eG03qi0.gif)

<div style="padding-left: 10px; padding-right: 10px; background-color: #EEE;"><div style="display: inline-block;">![](https://i.imgur.com/wd2Ac0Q.png)</div><div style="display: inline-block;"><p style="position: relative; top: 22px; left: 8px;">
    ***Now try implementing this code yourself.
    Make sure you have your Firebase page open so you can see things pop into the Firebase.***</p>  
</div></div>

```
Check!  
Point        __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

Now try implementing this code yourself. Make sure you have your firebase page open so you can see things pop into the firebase.

```

## Next

Note however, if you refresh the page, everything is gone : /

In the next part of the tutorial, we are going to make sure
that our app loads the old data from Firebase in addition to
adding new data to Firebase.

Next: [Loading Old Data from Firebase](loading_data.md)
