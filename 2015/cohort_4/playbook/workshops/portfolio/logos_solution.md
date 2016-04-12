# Solution: Adding logos to the social media links

To recap, we want to replace the text of the links with images.

## How I found the answer using Google

- google `html image link`
- open the first google result, [HTML Images - W3Schools](http://www.w3schools.com/html/html_images.asp)
- the title of the page is `"HTML Images"`
- therefore the page will primarily be about images, not links
- I specifically want to know about links
- so I search for the word `"link"` on the page.
  - on a mac, use `cmd + f` to search
  - on windows use `ctrl + f` to search
  - then type in `"link"` to the box that pops up
- Low and behold I see a section heading titled `Using an Image as a Link` with the example:
  
  > ```html
  > <a href="default.asp">
  >  <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;border:0;">
  > </a>
  > ```

  ```markdown
  Pro-tip!

  {o,o}
  ./)_)
    " "

  As a reminder we see inline styles here:
    style="width:42px;height:42px;border:0;"

  Inline styles are bad.
  So I'll remove it from the example.

  If you want to learn more about why, google `inline styles bad`
  ```

- And if we take away the inline style

```html
<a href="default.asp">
  <img src="smiley.gif" alt="HTML tutorial">
</a>
```

- The w3 school page also mentions
> To use an image as a link, simply nest the `<img>` tag inside the `<a>` tag:

- If you google `what does nesting html mean` you will find it means putting one tag inside of another. So nesting the `<img>` tag inside the `<a>` tag simply means "putting" the `<img>` tag inside the `<a>` ta

- Look at the above example and see if you can see how the `<img>` tag is inside of the `<a>` tag.

- So it seems like I need to do something like this:

```html
<a href="LINK_TO_WHATEVER_I_WANT">
  <img src="IMAGE_URL" alt="DESCRIPTION_OF_IMAGE">
</a>
```

## Making My Own Link To Image

So it seems like if I want to link to twitter with the image of Twitter, instead of doing:

```html
<a href="https://twitter.com/jonathanjleung">Twitter</a>
```

We can just replace the text `Twitter` with an image element

```html
<a href="https://twitter.com/jonathanjleung">
  <img src="https://i.imgur.com/aN1jbkL.png">
</a>
```

And if I have 3 links:

```html
<a href="https://twitter.com/jonathanjleung">
  <img src="https://i.imgur.com/aN1jbkL.png">
</a>
<a href="https://facebook.com/jonleung137">
  <img src="https://i.imgur.com/hqhKh8l.png">
</a>
<a href="https://github.com/jonleung">
  <img src="https://i.imgur.com/rnhMmVF.png">
</a>
```

## Adding the image links to my code

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
      <a href="https://twitter.com/jonathanjleung">
        <img src="https://i.imgur.com/aN1jbkL.png">
      </a>
      <a href="https://facebook.com/jonleung137">
        <img src="https://i.imgur.com/hqhKh8l.png">
      </a>
      <a href="https://github.com/jonleung">
        <img src="https://i.imgur.com/rnhMmVF.png">
      </a>
      <!--===================END_CHANGES===================-->

  </body>
</html>
```

## Seeing the result

- I make sure that I have clicked on `Preview Running Application`
- I refresh the preview page to see:

> ![](img/complete_html.png)

Yay! Now it seems that all of the ements on the page are present!

![](img/celebrate2.gif)

## Next
We've added EVERYTHING that we need in the HTML. Let's take your website and put it on the internet!

[Put our code permanently on the live internet!](github.md)
