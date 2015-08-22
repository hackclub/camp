# Project Setup

- Create the new folder, `instagram` inside of the `hack-camp` folder in your
  **ALREADY EXISTING** Cloud9 workspace. Do NOT create a new workspace.
- Inside of the newly created `instagram` folder, create your 3 files
  - `index.html`
  - `main.js`
- double click to open `index.html`
- In `index.html`, add the HTML base scaffold by typing the following code 
  - don't copy and paste it
  - make sure to indent properly
  
    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <script src="main.js"></script>
      </head>
      <body>
        <h1>Instagram</h1>
      </body>
    </html>
    ```

- Make sure that live reload is running by opening a new terminal in Cloud9 and
  typing `live_reload`

## A note about the `<script>` tag

The `<script>` has a `src` attribute inside of it just like the `<img>` tag
does.

```html
<img src="https://i.imgur.com/vS0HhER.jpg">
     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ this is an attribute
                                          of the image tag

     (think of attributes like settings)
```

```html
<img src="https://i.imgur.com/vS0HhER.jpg">
     ^^^ "src" is the name of the attribute
```

```html
<img src="https://i.imgur.com/vS0HhER.jpg">
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 
          "https://i.imgur.com/vS0HhER.jpg" is the value
          of the "src" attribute
```

```html
<img src="https://i.imgur.com/vS0HhER.jpg">
this ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

sets the "source" of the image to be displayed to be the above url
```

Similarly

```html
<script src="main.js"></script>
        ^^^^^^^^^^^^^ this is an attribute
                      of the script tag

     (think of attributes like settings)
```

```html
<script src="main.js"></script>
        ^^^ "src" is the name of the attribute
```

```html
<script src="main.js"></script>
            ^^^^^^^^^
          "main.js" is the value
          of the "src" attribute
```

```html
<script src="main.js"></script>
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ this
tells the browser to run the JavaScript code contained inside of main.js
```

## Next

According to our scaffold, I am on step 1

1. --> figure out how to do something when a button is clicked. Anything! I
  don't care what it is.
2. figure out how to ask a user for a URL for a given image
3. figure out how to add an image based on the URL that the user gave


[Figure Out How To Do Something When A Button Is Clicked](button_clicked.md)
