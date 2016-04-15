# Breaking Down The First Iteration

We decided in the [previous step](scoping.md) that the "scooter" minimal version of this app was an app that just adds an image from a URL to a page.

Here is a [demo](http://jsbin.com/cacaqa) of what this might look like.

## Breaking Down The Components

Instead of trying to build the entire scooter at once, we can break down the problem into smaller problems, making it much easier.

The components of this app are:

- when I click a button
- ask the user to give it a URL to an image
- add the photo to the page

At this point, if I don't know how to build this, I could try googling `when I click a button add an photo to the screen`. However, it will be hard to find someone else who has written about this exact problem. It will be much easier to find out how to do each of these components individually.

Therefore, I could 

1. figure out how to do something when a button is clicked. Anything! I don't care what it is.
2. figure out how to ask a user for a URL for a given image
3. figure out how to add an image based on the URL that the user gave

Only after doing this would I go and do the HTML + CSS because the javascripts is harder so I want to do that first. Sometimes however, an app feels much more "real" if there is some preliminary CSS so it may be worth considering adding *some* css to your projects before the javascripts.

But first, we need to create our base project.

Next: [Setting Up Your Project](project_setup.md)
