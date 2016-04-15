# Solution: Round Image

## Googling the solution

- I googled `css round image`
- I open the first result ["How to make rounded images with CSS · A Beautiful Site"](http://www.abeautifulsite.net/how-to-make-rounded-images-with-css/)
- When looking at resources, I immediately jump to the code section and try to extract what I need

    > ![](img/round_image.png)

- they have some selector called `.img-circle`, mine is called `img` so I just take their `border-radius: 50%;` code and re-type it into my own:

```css
img {
  width: 200px;
  border-radius: 50%;
}
```

## Seeing the result

- I make sure that I have clicked on `Preview Running Application`
- I refresh the preview page to see:

> ![](img/rounded.png)

![](img/celebration.gif)

## Next

Things are starting to look like the same, everything is not in the center yet though.

[Centering everything](centering_challenge.md)