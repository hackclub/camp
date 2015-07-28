- Getting off the ground
  - On the left file pane, right click and click `New Folder` to create a new
    folder. Name it `portfolio``

    ![](img/c9_create_portfolio_folder.gif)

  - Create a new file inside of portfolio called `index.html` and double click
    it to open it

    ![](img/c9_create_index_file.gif)

  - Go ahead and type the following code into the open file (don't copy and
    paste it! and make sure to indent properly!). Replace "Zaphod" with your
    first name and "Zaphod Beeblebrox" with your first and last name.

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <title>Zaphod's Portfolio</title>
      </head>
      <body>
        <h1>Zaphod Beeblebrox</h1>
      </body>
    </html>
    ```

    ![](img/c9_portfolio_template.gif)

  - Let's see what our website looks like so far.

    ![](img/c9_preview_template_website.gif)

  - We can also open the website in its own tab.

    ![](img/c9_preview_template_website_own_tab.gif)
- What have we done so far?
  - So what was that code we typed? Spoiler alert: almost every website on the
    internet is secretly written in a language called **HyperText Markup
    Language**, otherwise known as "HTML". So why don't you see code
    everywhere? Well, your browser reads HTML for you and just shows you the
    pretty version. It is sheltering you!
  - We'll get our hands a bit dirtier with the basics of HTML. We'll talk a
    little about formatting, links, and images so you can make a simple, but
    ugly, webpage.
  - If you want to make it pretty, we'll also do a quick dive into Cascading
    Syle Sheet (CSS), which many websites secretly use to make themselves
    pretty.
  - The basic building blocks of HTML are _HTML elements_. HTML elements are
    denoted by angled brackets. These are called **tags**. `<html>`, `<head>`,
    `<body>`, `<title>`, and `<h1>` are all tags.
  - All of the tags listed above are referred to as start tags - and if you
    start something, you need to end it. The end tag is exactly the same as
    the start tag with a cute forward slash (`/`) after the `<`. Consequently
    the end tag for `<html>` is `</html>`. The end tag for `<head>` is
    `</head>`, and so on.
  - HTML documents contain two important parts, denoted by tags:
    1. **head** - contains information about the document that is _not
       displayed on the screen_.
    2. **body** - contains everything that id displayed on the webpage.
  - Don't worry if you don't understand everything so far! You'll get a better
    understanding of these concepts as you write more code. As always, the
    most important thing is to ask a lot of questions!
    - _Warning_: some of the wording in this section was taken from Codecademy -
      remember to change this.

--------------------------------------------------------------------------------

[Deploying to Github](github.md)
