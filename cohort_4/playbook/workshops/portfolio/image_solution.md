# Image Challenge Solution

## Prompt

```html
<!-- PORTFOLIO -->

  <!-- IMAGE SECTION -->
    - http://i.imgur.com/vS0HhER.jpg <!-- NEXT -->
  
  <!-- INFORMATION SECTION -->
    <h1>Jonathan Leung</h1>
    <p>I want show people that the world is malleable. 
       I want them to know they can create what's missing
       and not be afraid to break the status quo.</p> 
    
  <!-- SOCIAL MEDIA SECTION -->
    - link to Facebook (https://twitter.com/jonathanjleung)
    - link to Twitter (https://twitter.com/jonathanjleung)
    - link to Github (https://github.com/jonleung)
```

## How I Googled

- I googled `html image`
- opened the [first w3schools page](http://www.w3schools.com/html/html_images.asp)
- I tried [the example](http://www.w3schools.com/html/tryit.asp?filename=tryhtml_images_mountain)
  - It seemed like this tag was responsible for adding the image to the page: `<img src="pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">`

```
Pro-tip!

{o,o}
./)_)
  " "

DO NOT USE the `style="..."` in your HTML
This makes your code really messy.

Any styling that you do should be in your CSS (which we will discuss later).

If you want to learn more, google `inline style bad`
```

- I learn from the w3 schools page
  > - "In HTML, images are defined with the <img> tag.
  > - The <img> tag is empty, it contains attributes only, and does not have a closing tag.
  > - The src attribute specifies the URL (web address) of the image:
  > - Example: `<img src="url" alt="some_text">`

```
Pro-tip!

{o,o}
./)_)
  " "

Also note that the `alt` attribute of the image tag is also not very regularly used. Feel free to omit it.
```

## The Solution

So it seems like I do something like this:
```html
<img src="http://i.imgur.com/vS0HhER.jpg" alt="Jonathan's Picture">
```

## Some Vocabulary

```html
<img src="http://i.imgur.com/vS0HhER.jpg" alt="Jonathan's Picture">
 ^ "img" is the tag name
```

```html
<img src="http://i.imgur.com/vS0HhER.jpg" alt="Jonathan's Picture">

note that <img> does not have a closing tag
```


```html
<img src="http://i.imgur.com/vS0HhER.jpg" alt="Jonathan's Picture">
     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ this is an attribute
                                          of the image tag

     (think of attributes like settings)
```

```html
<img src="http://i.imgur.com/vS0HhER.jpg" alt="Jonathan's Picture">
     ^^^ "src" is the name of the attribute
```

```html
<img src="http://i.imgur.com/vS0HhER.jpg" alt="Jonathan's Picture">
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 
          "http://i.imgur.com/vS0HhER.jpg" is the value
          of the "src" attribute
```

```html
<img src="http://i.imgur.com/vS0HhER.jpg" alt="Jonathan's Picture">

The "src" attribute actually sets what the picture s
```

```html
<img src="http://i.imgur.com/vS0HhER.jpg" alt="Jonathan's Picture">
                                          ^^^^^^^^^^^^^^^^^^^^^^^^^
                                          this is another attribute
                                          of the image tag

You can google more on what alt does by googling `img alt`
```

```html
<img src="http://i.imgur.com/vS0HhER.jpg" alt="Jonathan's Picture">
   "alt" is the name of another attribute ^^^ 
```

```html
<img src="http://i.imgur.com/vS0HhER.jpg" alt="Jonathan's Picture">
                                          ^^^^^^^^^^^^^^^^^^^^^^^^ 
                                          "Jonathan's Picture" is the 
                                          value of the "alt" attribute.
```

## Solution

```html
<!-- PORTFOLIO -->

  <!-- IMAGE SECTION -->
    <img src="http://i.imgur.com/vS0HhER.jpg" alt="Photo of Jonathan">
    <!-- ^ SOLUTION -->
  
  <!-- INFORMATION SECTION -->
    <h1>Jonathan Leung</h1>
    <p>I want show people that the world is malleable. 
       I want them to know they can create what's missing
       and not be afraid to break the status quo.</p> 
    
  <!-- SOCIAL MEDIA SECTION -->
    - link to Facebook (https://twitter.com/jonathanjleung)
    - link to Twitter (https://twitter.com/jonathanjleung)
    - link to Github (https://github.com/jonleung)
```

![](img/photo.png)

## Next

You may notice that the image is too big right now. We can fix this with CSS but our focus is to get all of the data onto the page first.

Let's add the links to Github, Facebook and LinkedIn

[Adding links](links_challenge.md)