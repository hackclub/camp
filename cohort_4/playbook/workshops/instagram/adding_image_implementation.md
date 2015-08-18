# Adding an image based on the user's given URL

Steps:
- Google `javascript add image html`
- From the [first search result](http://stackoverflow.com/questions/2735881/adding-images-to-the-html-with-javascript)
  , I read the title, "Adding images to the html with javascript".
  Seems relevant.
- Most upvoted answer was ![](https://s3.amazonaws.com/f.cl.ly/items/3D1v2s112T201A3Y1K0t/Image%202015-07-17%20at%208.13.01%20AM.png)
- I tried making this work in a JS bin

  ```js
  var img = document.createElement("img");
  img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";

  var src = document.getElementById("header");
  src.appendChild(img);
  ```

- I got this error ![](https://s3.amazonaws.com/f.cl.ly/items/3o1y3G2K3w2b370q0b46/Image%202015-07-17%20at%208.15.42%20AM.png)
- I googled `Uncaught TypeError: Cannot read property 'appendChild' of null`
- From the 3rd google result ([which was this Stack Overflow question](http://stackoverflow.com/questions/30014090/uncaught-typeerror-cannot-read-property-appendchild-of-null)), one of the answers had the text "There isn't an element on your page".
- This made me realize that `document.getElementById("header");` is trying to 
  find an element with an `id` of `"header"` and currently, that doesn't element
  doesn't exist.
- I solve this by adding a `<div>` tag with an `id` of `"header"` in my html.
  Note that I did not modify the JavaScript.
  > Note, we havn't really talked about `<div>` tags before but they are useful
  > tag for "dividing" up the page into sections. Google "html div" if you want 
  > to read more)
- Now my HTML looks like this:
  
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>JS Bin</title>
  </head>
  <body>
    <div id="header"></div>
  </body>
  </html>
  ```

- Huzzah! Now the image [works in my JS Bin](http://jsbin.com/mekila/1/edit?html,js,output)!
- Now that I got this example to work in an isolated environment, I feel 
  comfortable adding it to my existing code:

**WARNING: this code only adds the same Google image to the page no matter what you type in.**

  ```html
  <!--index.html-->

  <!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" href="main.css">
      <script src="main.js"></script>
    </head>
    <body>
      <h1>Instagram</h1>
      <input id="button" type="submit" name="button" value="Add Photo"/>  
      <div id="header"></div>
    </body>
  </html>
  ```

  ```js
  // main.js

  window.onload = function() {
      var addPictureButton = document.getElementById('button');
      addPictureButton.onclick = function() {
          var photoUrl = prompt("Give us a URL of a photo");
          alert(photoUrl)

          var img = document.createElement("img");
          img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";

          var parent = document.getElementById("header"); // renamed to parent because more intuitive
          parent.appendChild(img);
      };
  };
  ```

[![](https://i.imgur.com/9KuKZGN.png)](http://output.jsbin.com/qenulasosu)

- and then with one simple modification to the Javascripts (denotated with with `!!!`)

  ```js
  // main.js

  window.onload = function() {

    var button = document.getElementById('button');

    var takePhoto = function() {
      var photoUrl = prompt("Give us a URL of a photo you want to add to the stream!")
      
      var img = document.createElement("img");
      img.src = photoUrl // !!! NEW CHANGE FOR DYNAMICALLY CHANGING PHOTOS !!!

      var parent = document.getElementById("header");
      parent.appendChild(img);
    }
    
    button.onclick = takePhoto;
  };
  ```

[![](https://i.imgur.com/9KuKZGN.png)](http://output.jsbin.com/mekila)

## Huzzah!

We finished, it works!

- Great! Let's create a snapshot of this change with git and upload it to
  GitHub. As we've done before, run the following commands:
- `git add --all` - tell git to add all of our current changes to the
  current snapshot.
- `git commit -m "add instagram workshop"` - create a snapshot
  with the message "add instagram workshop"
- `git push` - upload our snapshot to GitHub

Great! Our code is now Hosted our website on GitHub pages at 
https://github_username.github.io/instagram/index.html

# Fine!