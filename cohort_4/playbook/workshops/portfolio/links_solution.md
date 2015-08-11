# Links Solution

To recap: we want to add text links to social media services.

I don't know how to add a link in HTML so I'll google it:

## Finding the answer using Google

I wont' go into too much depth because the googling process looks very similar.

- I googled `html links`
- I opened the [first result titled "HTML Links - W3Schools"](http://www.w3schools.com/html/html_links.asp)
- I tried [the example](http://www.w3schools.com/html/tryit.asp?filename=tryhtml_links_w3schools)
  - It seemed like this tag was responsible for adding the link to the page:
  
    ```html
    <a href="http://www.w3schools.com/html/">Visit our HTML tutorial</a>
    ```

- I then learned the following from [the initial W3Schools page](http://www.w3schools.com/html/html_links.asp)
  > "The `href` attribute specifies the destination address (`http://www.w3schools.com/html/`)

## Making the `a` tags

So it seems like I do something like this:

```html
<a href="https://twitter.com/jonathanjleung">Twitter</a>
```

And if I have 3 links:

```html
<a href="https://twitter.com/jonathanjleung">Twitter</a>
<a href="https://facebook.com/jonleung137">Facebook</a>
<a href="https://github.com/jonleung">Github</a>
```

## Adding the links to my code

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Zaphod's Portfolio</title>
  </head>
  <body>
  <!-- PORTFOLIO -->
  
    <!-- IMAGE SECTION -->
      <img src="https://i.imgur.com/vS0HhER.jpg" alt="Photo of Jonathan">
  
    <!-- INFORMATION SECTION -->
      <h1>Jonathan Leung</h1>
      <p>I want show people that the world is malleable. I want them to know 
      they can create what's missing and not be afraid to break the status quo.</p>

    <!-- SOCIAL MEDIA SECTION -->
      <!--==================BEGIN_CHANGES==================-->
      <a href="https://twitter.com/jonathanjleung">Twitter</a>
      <a href="https://facebook.com/jonleung137">Facebook</a>
      <a href="https://github.com/jonleung">Github</a>
      <!--===================END_CHANGES===================-->

  </body>
</html>
```

## Seeing the result

- I make sure that I have clicked on `Preview Running Application`
- I refresh the preview page to see:

> ![](img/links.png)

Yay! Now it seems that if I click on below links, they take me to a page!

![](img/celebration.gif)

## Some Vocabulary

```html
<a href="https://twitter.com/jonathanjleung">Twitter</a>
 ^ "a" is the tag name
```

```html
<a href="https://twitter.com/jonathanjleung">Twitter</a>
^ this is the opening tag                           ^ this is the
                                                      closing tag

(Note that the a tag HAS a closing tag)
```

```html
<a href="https://twitter.com/jonathanjleung">Twitter</a>
                                             ^^^^^^^
This is the inner html.
It is text that is actually displayed on the screen.
```

```html
<a href="https://twitter.com/jonathanjleung">Twitter</a>
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ this is an attribute
                                             of the a tag

     (think of attributes like settings)
```

```html
<a href="https://twitter.com/jonathanjleung">Twitter</a>
   ^^^^ "href" is the name of this attribute
```

```html
<a href="https://twitter.com/jonathanjleung">Twitter</a>
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 
         "https://twitter.com/jonathanjleung"
         is the value of the "href" attribute
```

```html
<a href="https://twitter.com/jonathanjleung">Twitter</a>

The "href" attribute sets the destination URL that the user 
is taken to if they click on the link.
```

## Next

Instead of writing the text `Twitter`, `Facebook`, or `Github`
I instead want their logos themself to be a link.

[Adding logos](logos_challenge.md)