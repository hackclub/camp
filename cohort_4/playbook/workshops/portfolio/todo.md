# TODO
- Link to previous and next pages at the top of the markdown page
- Make the Googling examples stronger (perhaps have andrea do them)
- Have a list of questions at the 
    - End of the entire tutorial
    - End of each section that they should be able to answer
- Include the outline at the bottom of each markdown file


```html
<!-- PORTFOLIO -->

  <!-- IMAGE SECTION -->
    <img src="http://i.imgur.com/vS0HhER.jpg" alt="Photo of Jonathan">
  
  <!-- INFORMATION SECTION -->
    <h1>Jonathan Leung</h1>
    <p>I want show people that the world is malleable. 
       I want them to know they can create what's missing
       and not be afraid to break the status quo.</p> 
    
  <!-- SOCIAL MEDIA SECTION -->
    <a href="https://twitter.com/jonathanjleung">
      <img src="http://i.imgur.com/aN1jbkL.png">
    </a>
    <a href="https://facebook.com/jonleung137">
      <img src="http://i.imgur.com/hqhKh8l.png">
    </a>
    <a href="https://github.com/jonleung">
      <img src="http://i.imgur.com/rnhMmVF.png">
    </a>
```

```html
<body>
<!-- PORTFOLIO -->

  <!-- IMAGE SECTION -->
    <img src="http://i.imgur.com/vS0HhER.jpg" alt="Photo of Jonathan">
  
  <!-- INFORMATION SECTION -->
    <h1>Jonathan Leung</h1>
    <p>I want show people that the world is malleable. 
       I want them to know they can create what's missing
       and not be afraid to break the status quo.</p> 
    
  <!-- SOCIAL MEDIA SECTION -->
    <a href="https://twitter.com/jonathanjleung">
      <img src="http://i.imgur.com/aN1jbkL.png">
    </a>
    <a href="https://facebook.com/jonleung137">
      <img src="http://i.imgur.com/hqhKh8l.png">
    </a>
    <a href="https://github.com/jonleung">
      <img src="http://i.imgur.com/rnhMmVF.png">
    </a>
</body>
```

```html
<head>
    
</head>
<body>
<!-- PORTFOLIO -->

  <!-- IMAGE SECTION -->
    <img src="http://i.imgur.com/vS0HhER.jpg" alt="Photo of Jonathan">
  
  <!-- INFORMATION SECTION -->
    <h1>Jonathan Leung</h1>
    <p>I want show people that the world is malleable. 
       I want them to know they can create what's missing
       and not be afraid to break the status quo.</p> 
    
  <!-- SOCIAL MEDIA SECTION -->
    <a href="https://twitter.com/jonathanjleung">
      <img src="http://i.imgur.com/aN1jbkL.png">
    </a>
    <a href="https://facebook.com/jonleung137">
      <img src="http://i.imgur.com/hqhKh8l.png">
    </a>
    <a href="https://github.com/jonleung">
      <img src="http://i.imgur.com/rnhMmVF.png">
    </a>
</body>
```

```html
<head>
    <title>Jonathan Leung</title>
</head>
<body>
<!-- PORTFOLIO -->

  <!-- IMAGE SECTION -->
    <img src="http://i.imgur.com/vS0HhER.jpg" alt="Photo of Jonathan">
  
  <!-- INFORMATION SECTION -->
    <h1>Jonathan Leung</h1>
    <p>I want show people that the world is malleable. 
       I want them to know they can create what's missing
       and not be afraid to break the status quo.</p> 
    
  <!-- SOCIAL MEDIA SECTION -->
    <a href="https://twitter.com/jonathanjleung">
      <img src="http://i.imgur.com/aN1jbkL.png">
    </a>
    <a href="https://facebook.com/jonleung137">
      <img src="http://i.imgur.com/hqhKh8l.png">
    </a>
    <a href="https://github.com/jonleung">
      <img src="http://i.imgur.com/rnhMmVF.png">
    </a>
</body>
```

```html
<head>
    <title>Jonathan Leung</title>
    <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
<!-- PORTFOLIO -->

  <!-- IMAGE SECTION -->
    <img src="http://i.imgur.com/vS0HhER.jpg" alt="Photo of Jonathan">
  
  <!-- INFORMATION SECTION -->
    <h1>Jonathan Leung</h1>
    <p>I want show people that the world is malleable. 
       I want them to know they can create what's missing
       and not be afraid to break the status quo.</p> 
    
  <!-- SOCIAL MEDIA SECTION -->
    <a href="https://twitter.com/jonathanjleung">
      <img src="http://i.imgur.com/aN1jbkL.png">
    </a>
    <a href="https://facebook.com/jonleung137">
      <img src="http://i.imgur.com/hqhKh8l.png">
    </a>
    <a href="https://github.com/jonleung">
      <img src="http://i.imgur.com/rnhMmVF.png">
    </a>
</body>
```

## Font Color
- initially do red
- then do gray

```css
body {
    color: rgb(68, 68, 68);
}
```


## Centering
- don't use the center tag
```css
body {
    color: rgb(68, 68, 68);
    text-align: center;
}
```


## Profile Picture - I Do

```html
<img class="profile-picture" src="http://i.imgur.com/vS0HhER.jpg" alt="Photo of Jonathan">
```

```css
.profile-picture {
    width: 200px;
}
```

## Social Media Icons - You Do

```html
<a href="https://twitter.com/jonathanjleung">
  <img class="social-icon" src="http://i.imgur.com/aN1jbkL.png">
</a>
<a href="https://facebook.com/jonleung137">
  <img class="social-icon" src="http://i.imgur.com/hqhKh8l.png">
</a>
<a href="https://github.com/jonleung">
  <img class="social-icon" src="http://i.imgur.com/rnhMmVF.png">
</a>
```

```css
.social-icon {
    width: 40px;
}
```

## Fonts
- I add Arial to .name
- You add Arial to .description
- also do font-size here

## Google Web Fonts
- I add Source Sans Pro to .name
    - ordering of CSS?
    - expect http error (console lesson)
- You add Raleway to .description
    - font weights

```html
<h1 class="name">Jonathan Leung</h1>
<p class="description">I want show people that the world is malleable. 
   I want them to know they can create what's missing
   and not be afraid to break the status quo.</p> 
```

```css
.name {
  font-family: 'Source Sans Pro', sans-serif;
}

.description {
  font-family: 'Raleway', sans-serif;
}
```

```css
.name {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
}

.description {
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
}
```



## Border Radius

```css
.profile-picture {
    width: 200px;
    border-radius: 100px;
}
```

## Constraining Width

- Show screenshot of constraining the width with the sketch
- Then show the inspect element
- Now we constrain the width
- And now we center it

```html
<body>
<!-- PORTFOLIO -->
<div class="container">
    

  <!-- IMAGE SECTION -->
    <img src="http://i.imgur.com/vS0HhER.jpg" alt="Photo of Jonathan">
  
  <!-- INFORMATION SECTION -->
    <h1>Jonathan Leung</h1>
    <p>I want show people that the world is malleable. 
       I want them to know they can create what's missing
       and not be afraid to break the status quo.</p> 
    
  <!-- SOCIAL MEDIA SECTION -->
    <a href="https://twitter.com/jonathanjleung">
      <img src="http://i.imgur.com/aN1jbkL.png">
    </a>
    <a href="https://facebook.com/jonleung137">
      <img src="http://i.imgur.com/hqhKh8l.png">
    </a>
    <a href="https://github.com/jonleung">
      <img src="http://i.imgur.com/rnhMmVF.png">
    </a>
</body>
```

- Creating divs for every secion