# Solution: Resizing the image

To recap, we want to change the image size to make them smaller

## Googling the solution

- I Google `css image resize`

    > ![](img/google_css_image_resize.png)

- I open the first result, and read through it. In fact I read through all of them and read it and none of them met the all 3 requirements:
    - I understood
    - worked
    - were the right way to implement it
- It was the same thing when I changed my Google query to `css change size`

## Asking for help

After you've tried googling yourself for more than 3-6 minutes, definitely ask for help:

> I tried googling for `css image resize` and `css image change size` and they either didn't work or I didn't understand them

The facilitator may offer

> try googling `css img width`

## Trying With My New Google Search

- I google `css img width`
- I open the first result ["CSS width property - W3Schools"](http://www.w3schools.com/cssref/pr_dim_width.asp)
- I scan through the page until I see

    > ![](img/w3_image_example.png)

- I open the example and didn't understand it
- I decide to just try

    ```css
    img {
        width: 50%;
    }
    ```

## Adding this code to my main.css file.

![](img/css_image_width.gif)

## Previewing our work

Just like before,

- click `Preview`
- then click `Preview Running Application`

## The Result

> ![](img/image_percentage_shrink.png)

![](img/celebration.gif)

## The basics of CSS

Let's breakdown what this means:

![](img/css_img_example.png)

![](img/img_css_highlight.png) For every `img` element

![](img/css_curly_braces.png) I want all the style properties inside the curly brackets to apply:

![](img/css_property.png) Speifically, I want the width

![](img/css_value.png) to be 50%

**Vocabulary**

![](img/img_css_highlight.png) `img` is called the selector

![](img/css_curly_braces.png) `{` `}` are called curly braces

![](img/css_property.png) `width`, the thing on the left side of the semicolon is called the `"property"`

![](img/css_value.png) `50%` is what's known as the `"value"`

## width: 50%

Because we set the all `img` tags to have a `width` of `50%`, the image will always take up `50%` of what its contained in. Because the `img` tag is inside of the `body` tag, it will take up `50%` of the `body`.

```
Mess Round

  /~\
 C oo
 _( ^)
/   ~\

Try changing the size of the window to see the size of the image changes as the size of the `body` changes.
```

> ![](img/dynamic_image_size.gif)

## Using "px" instead of "%"

Something that's a bit more simpler than "%" is using `px`

    ```css
    img {
        width: 200px;
    }
    ```

The above sets the width of every `img` tag to `200px` or "200 pixels". It doesn't matter what the screen size is.

## Next

[Making the image round](round_challenge.md)