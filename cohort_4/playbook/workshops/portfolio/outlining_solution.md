# Solution: Outlining your code

Note that there are many ways to outline this. This is just one potential solution.

## One Potential Solution

![](img/portfolio_subsections.png)

```
<!DOCTYPE html>
<html>
  <head>
    <title>Zaphod's Portfolio</title>
  </head>
  <body>
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
  </body>
</html>
```

![](img/outline.png)

## Update Your Description

Although the way you did it could have been completely "right", just for the sake of this tutorial, please update yours to match the above.

## Filling In the names

We can start to replace the outline with our own custom information. For example:
- `"name"` with `"Jonathan Leung"` and
- `"description"` with `"I want to show..."`

- TODO: http://g.recordit.co/pfjFBNXHlS.gif

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Zaphod's Portfolio</title>
  </head>
  <body>
    - portfolio
      - image section
        - http://i.imgur.com/vS0HhER.jpg
      - informational section
        - Jonathan Leung
        - I want show people that the world is malleable. I want them to know they can create what's missing and not be afraid to break the status quo.
      - social media section
        - link to Facebook (https://twitter.com/jonathanjleung)
        - link to Twitter (https://twitter.com/jonathanjleung)
        - link to Github (https://github.com/jonleung)
  </body>
</html>

```

## Placeholding

We are using the above outline as a placeholders for our code that will soon be written. Throughout this tutorial, we will be replacing each bullet point with real HTML code. Having a scaffold reminds us of the entire structure of the code and helps us figure out where we want to go next.

## Previewing our work

Just like before,

- click `Preview`
- then click `Preview Running Application`

## The Result
![](img/preview_outline.png)

The above certainly looks weird. That's because right now we just have an outline.

The first thing to make this look closer to our actual website though, is to hide the bullet points we don't want in the final website to show up as text.

For example, `image section` and `informational section` for instance should not be displayed.

## Things To Be Removed

![](img/preview_outline_crossed.png)

## Leaving Comments

When any text is surrounded by the charachters, i.e. `<!-- text -->` the text will only be visible in the code and not on the site.

This is called a comment.

It is useful:

- to leave notes to yourself or your teammates
- or to keep the names of your scaffolding

## Our New Outline

(which now has all of those section titles removed)

```
<!-- PORTFOLIO -->

  <!-- IMAGE SECTION -->
    - http://i.imgur.com/vS0HhER.jpg
  
  <!-- INFORMATION SECTION -->
    - Jonathan Leung
    - I want show people that the world is malleable. I want them to know they can create what's missing and not be afraid to break the status quo.

  <!-- SOCIAL MEDIA SECTION -->
    - link to Facebook (https://twitter.com/jonathanjleung)
    - link to Twitter (https://twitter.com/jonathanjleung)
    - link to Github (https://github.com/jonleung)
```

## Preview

![](img/preview_outline_with_comments.png)

## Next

[A bit more information about the structure of this tutorial](tutorial_format.md)