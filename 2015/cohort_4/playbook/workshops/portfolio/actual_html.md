# Actual HTML

So right now we have this outline in our `index.html` file:

```
- portfolio
  - image section
    - image
  - informational section
    - name
    - description
  - social media section
    - link to Facebook
    - link to Twitter
    - link to Github
```

## Viewing our HTML Page

We notice that this doesn't really look like an HTML page.

![](img/empty_window.png)

## Commenting Out The Sections

The first thing that is noticable is that the text "image section", "information section", and "social media section" are visible. Because these are sections of the page, they shouldn't actually be visible.

To comment something out, we can put the text inside of these things `<!-- all text inside of these things will be ignored -->`

```
<!-- PORTFOLIO -->

  <!-- IMAGE SECTION -->
    - image
  
  <!-- INFORMATION SECTION -->
    - name
    - description

  <!-- SOCIAL MEDIA SECTION -->
    - link to Facebook
    - link to Twitter
    - link to Github
```

_TODO: Link to adding the name_
