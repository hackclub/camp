# Starter Code

[Here is a demo](https://rawgit.com/hackedu/hack-camp/e95f92ed48f7ed5389acbce087071b2272057c23/cohort_3/curriculum/workshops/todo/src/0_just%20html/index.html) of what we're going to make in this version.

- open the demo
- try hovering over each task to show the (non-functional) delete button
- try checking and unchecking the checkboxes

Note that you can't actually add tasks in this version.

The focus of this tutorial is not to learn css or design but to focus on the manipulation of HTML with javascript, that's why we're giving you the starter code for HTML and CSS.

## So feel free to copy and paste the CSS file into your `main.css`

```css

/*
For the HTML & CSS goes to Thibaut Courouble (http://thibaut.me/)
See http://www.cssflow.com/snippets/simple-to-do-list/demo
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

.about {
  margin: 70px auto 40px;
  padding: 8px;
  width: 260px;
  font: 10px/18px 'Lucida Grande', Arial, sans-serif;
  color: #bbb;
  text-align: center;
  text-shadow: 0 -1px rgba(0, 0, 0, 0.3);
  background: #383838;
  background: rgba(34, 34, 34, 0.8);
  border-radius: 4px;
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
  background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
  background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
  -webkit-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2), 0 0 6px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2), 0 0 6px rgba(0, 0, 0, 0.4);
}
.about a {
  color: #eee;
  text-decoration: none;
  border-radius: 2px;
  -webkit-transition: background 0.1s;
  -moz-transition: background 0.1s;
  -o-transition: background 0.1s;
  transition: background 0.1s;
}
.about a:hover {
  text-decoration: none;
  background: #555;
  background: rgba(255, 255, 255, 0.15);
}

.about-links {
  height: 30px;
}
.about-links > a {
  float: left;
  width: 50%;
  line-height: 30px;
  font-size: 12px;
}

.about-author {
  margin-top: 5px;
}
.about-author > a {
  padding: 1px 3px;
  margin: 0 -1px;
}

/*
 * Copyright (c) 2012-2013 Thibaut Courouble
 * http://www.cssflow.com
 *
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */
body {
  font: 13px/20px 'Lucida Grande', Tahoma, Verdana, sans-serif;
  color: #404040;
  background: #f8f6f6;
}

.container {
  margin: 50px auto;
  width: 380px;
}
.container .todo {
  margin: 0 auto;
}

.todo {
  position: relative;
  width: 260px;
  padding: 12px 0;
  background: white;
  border: 1px solid;
  border-color: #dfdcdc #d9d6d6 #ccc;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.todo:before, .todo:after {
  content: '';
  position: absolute;
  z-index: -1;
  height: 4px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 2px;
}
.todo:after {
  bottom: -3px;
  left: 0;
  right: 0;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.todo:before {
  bottom: -5px;
  left: 2px;
  right: 2px;
  border-color: #c4c4c4;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}
.lt-ie9 .todo:before, .lt-ie9 .todo:after {
  height: 1px;
  border-top: 0;
}

#todo-list {
  border-top: 1px solid #e6ebed;
}
#todo-list:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 35px;
  width: 3px;
  z-index: 2;
  border: 1px solid #f2e3df;
  border-width: 0 1px;
}
#todo-list li {
  position: relative;
  padding: 7px 15px 7px 50px;
  line-height: 21px;
  font-size: 12px;
  color: #8b8f97;
  border-bottom: 1px solid #e6ebed;
}
#todo-list .toggle {
  margin-top: 5px;
  margin-left: 9px;
  display: block;
  position: absolute;
  /*top: 0;
  bottom: 30px;*/
  left: 0;
  width: 35px;
  text-shadow: none;
  color: transparent;
}

.todo-controls {
  margin: 0 15px 12px 50px;
  height: 12px;
}
.todo-controls li {
  float: left;
}
.todo-controls li + li {
  margin-left: 10px;
}
.todo-controls .right {
  float: right;
}
.todo-controls span {
  display: block;
  margin: 0;
  opacity: .6;
  cursor: pointer;
}
.todo-controls span:hover {
  opacity: 1;
  cursor: pointer;
}

.todo-pagination {
  margin: 12px 12px 0 50px;
  height: 22px;
}
.todo-pagination li {
  float: left;
}
.todo-pagination .next {
  float: right;
}
.todo-pagination .next i {
  margin: 0 0 0 2px;
}
.todo-pagination a, .todo-pagination span {
  display: block;
  line-height: 22px;
  font-size: 11px;
  color: #676f7f;
}
.todo-pagination a {
  padding: 0 8px;
  text-decoration: none;
  text-shadow: 0 1px white;
  background: #f1f0f0;
  border-radius: 3px;
}
.todo-pagination a:hover {
  background: #e9e9e9;
}
.todo-pagination span {
  padding: 0 4px;
  opacity: .3;
}

[class^="icon-"], [class*=" icon-"] {
  display: inline-block;
  vertical-align: -2px;
  margin-right: 2px;
  width: 12px;
  height: 12px;
  background-image: url("https://i.imgur.com/xOQtCqY.png");
  background-repeat: no-repeat;
  font: 0/0 serif;
  text-shadow: none;
  color: transparent;
}

.icon-check {
  background-position: 0 0;
}

.icon-add {
  background-position: -12px 0;
}

.icon-delete {
  background-position: -24px 0;
}

.icon-settings {
  background-position: -36px 0;
}

.icon-previous {
  background-position: -48px 0;
}

.icon-next {
  background-position: -60px 0;
}

.delete {
  display: none
}

#todo-list li:hover .delete { 
  display: inline-block;
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;  
  top: 0;  
  bottom: 0;  

  right: 10px;
}
```

## But manually hand-type the below code into your `index.html` file 

*We recommend hand typing in this situation because you will be using and manipulating the HTML lot throughout this project. Hand typing it gives you more familiarity with the code.*

```html
<!DOCTYPE html> 
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Todo List</title>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <div class="container">
    <div class="todo">
      <!-- Controls -->
      <ul class="todo-controls">
        <li>
          <span class="icon-add">Add</span>
        </li>
        <li class="right">
          <span class="icon-settings">Settings</span>
        </li>
      </ul>
      <!-- Task List -->
      <ul id="todo-list">
        <li>
          <input class="toggle" type="checkbox">
          <span>See no evil</span>
          <img class="delete" src="https://i.imgur.com/BtLxCD6.png">
        </li>
        <li>
          <input class="toggle" type="checkbox">
          <span>Hear no evil</span>
          <img class="delete" src="https://i.imgur.com/BtLxCD6.png">
        </li>
        <li>
          <input class="toggle" type="checkbox">
          <span>Speak no evil</span>
          <img class="delete" src="https://i.imgur.com/BtLxCD6.png">
        </li>
    </div>
  </div>
  <script type="text/javascript" src="main.js"></script>
</body>
</html>
```

```md
Challenge!  
Time        __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

1) Can you add two more tasks to the current task list?

--

Solution:
https://gist.github.com/jonleung/53d28a675640be927b1e

```

## Next

We have hard-coded all of our tasks in our task list (meaning that we wrote them out by hand in the HTML). We now want to be able to press a button and it asks us what task we want to add to the list and adds it for us!

---

Next: [Adding Tasks with Javascript](adding_tasks.md)
