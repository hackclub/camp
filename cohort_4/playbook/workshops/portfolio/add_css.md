# Adding CSS

Time to make our website prettier. While HTML lets us put all sorts of
interesting content on our page, it has very poor taste in fashion - as we've
seen. Second spoiler alert: nearly every website on the internet is secretly
made pretty with **Cascading Style Sheets**, otherwise known as "CSS". Let's
spice up our portfolio with CSS.

## Creating our CSS file

- Right click on your `portflio` folder
- Click `"New File"`
- Name the new file `main.css`

![](img/add_css_file.gif)

## Telling the HTML about our CSS file

We need to tell the HTML file that we want to add our css file `main.css`

![](img/add_css.gif)

- Make a new line under the `<title>`
- Type `link`
- Press the `tab` key. this expands to:

  ```html
  <link rel="stylesheet" href="" type="text/css" />
  ```

- Set the `href` attribute to `main.css`
    
  ```html
  <link rel="stylesheet" href="main.css" type="text/css" />
  ```

Let's head back over to `index.html` and add 

This tells the browser to refer to the `css/styles.css` we just created for our beautifying needs.

## Testing That It's Connected

#TODO 

## Next

[Now that we're in CSS world, let's resize our image](image_resize_challenge.md)
