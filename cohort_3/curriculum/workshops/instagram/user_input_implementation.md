# User Input Implementation

So now we need to ask the user to give us a URL to an existing image. So to figure out how to do that, we could google the following (where the top is the worst and the bottom is the best)

- "ask me for a link of an existing photo"
- "ask user for link of existing photo"
- "ask user for text"
- "javascript ask user for text

Using the same Googling procedure above of opening the first 3 tabs, from w3 schools we see

![](https://s3.amazonaws.com/f.cl.ly/items/0J3T3j0I1V1E3i3N3h0k/Image%202015-07-17%20at%204.38.37%20AM.png)

I open the [Try it yourself](http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt)

which seems to work. And then try to simplify the example by 
- removing everything below the line `if (person != null) {` and 
- adding an alert.

```js
var person = prompt("Please enter your name", "Harry Potter");
alert(person);
```

[![](https://i.imgur.com/9KuKZGN.png)](http://jsbin.com/jawaga/1/edit?js,output)

#### Integrating the code:

```js
// main.js

window.onload = function() {

  var button = document.getElementById('button');

  var takePhoto = function() {
    var photoUrl = prompt("Give us a URL of a photo you want to add to the stream!")
    alert(photoUrl)
  }
  
  button.onclick = takePhoto;
};
```

Next: [Adding an image based on the user's given URL](adding_image.md)