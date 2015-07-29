# Potential Outlining Solution

Note that there are many ways to outline this. This is just one potential solution.

## Solution

![](img/portfolio_subsections.png)

```
index.html

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

![](img/portfolio_subsctions_screenshot.png)

## Filling In the names

We can start to replace 
- `name` with `Jonathan Leung` and
- `description` with `I want to show...`

```html
index.html

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
```

## Viewing the Result

![](img/preview_live.gif)

- Open the `Preview` menu
- then click on `Preview Running Application`
- Click the white arrow to pop the preview in a new tab
- Move the newly created tab to a new window

## The Result
![](img/preview_outline.png)

The above certainly looks weird, but one thing I do notice is that I don't want the following to actually appear on the page.

## Things To Be Removed

![](img/preview_outline_crossed.png)

To tell the computer to ignore something, we can put the text inside of these things":

`<!-- all text inside of these things will be ignored -->`

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

## This is our result:

(which now has all of those section titles removed)

![](img/preview_outline_with_comments.png)

## Next

[Let's add the name first](adding_name_challenge.md)