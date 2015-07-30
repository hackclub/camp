# Formatting Your Name

Let's figure out how to format your name so that it looks like this:

![](img/name.png)

## Looking at the Outline

Let's take a look to see where we are and what we want to do next.

This is what you should have right now:

```html
<!-- PORTFOLIO -->

  <!-- IMAGE SECTION -->
    - http://i.imgur.com/vS0HhER.jpg 
  
  <!-- INFORMATION SECTION -->
    - Jonathan Leung <!-- {{ NEXT }} -->            
    - I want show people that the world is malleable. I want them to know they can create what's missing and not be afraid to break the status quo.

  <!-- SOCIAL MEDIA SECTION -->
    - link to Facebook (https://twitter.com/jonathanjleung)
    - link to Twitter (https://twitter.com/jonathanjleung)
    - link to Github (https://github.com/jonleung)
```

```
Pro-tip!

{o,o}
./)_)
  " "

I will add the text `<!-- {{ NEXT }} -->` wheverer I work on next in the code.

See if you can spot it in the above box.
```

## Asking for Help

Ideally you would be able to Google how to do this, but right now we don't even know what to ask Google.

So you might ask a facillitator for help:

```
I want to add some large title text to my page. How do I do that?
```

The facillitator may respond:

```
Use a header! Google will tell you how to use it.
```

Great, I have no idea what a header is, but I know I can Google it.

## Googling

Here are some possible search queries starting with the worst and ending with the best.

Read each of the google queries and their associated problems until you get to the best one at the bottom (so that you can optimize your searches too).

- `how do you add a header`
    - Problem: you did not indicate that you wanted to add a header in `html`
- `how do you add a header in html`
    - Problem: you get better results if you put the main topic in the front
- `html how do you add a header`
    - Problem: the words `how do you` and `a` are extraneous. Google doesn't really care about them.
- `html add header`
    - Awesome. Let's google it.

## Google Results

![](img/heading_google.png)

[The first result](http://www.w3schools.com/html/html_headings.asp) looks like it talks about headings. Let's open that one.

```md
Pro-tip!

{o,o}
./)_)
  " "

An important note about W3Schools: I would treat it like Wikipedia in 
that it's probably is a good place to get started but its facts are not 
necessarily reliable.
```

![](img/heading_google_1.png)

Almost always, the first thing I'd try to do is see a working example.

So when I saw this:

![](img/headings_google_1a.png)

## I'd click on it.

![](img/headings_google_1b.png)

This seems like a good search result because it seems like what we're looking for. Right now you should be thinking to yourself "heading 1 looks like the same size and format as what I wanted..."

Let's give the following a try!

```html
<h1>Jonathan Leung</h1>
```

## Adding the h1 tag to our `index.html` file

```
Note: I will add the text

    <!-- CHANGE -->

on only line that I plan to work on next
```

```html
<!-- PORTFOLIO -->

  <!-- IMAGE SECTION -->
    - http://i.imgur.com/vS0HhER.jpg 
  
  <!-- INFORMATION SECTION -->
    <h1>Jonathan Leung</h1>            <!-- CHANGE -->
    - I want show people that the world is malleable. I want them to know they can create what's missing and not be afraid to break the status quo.

  <!-- SOCIAL MEDIA SECTION -->
    - link to Facebook (https://twitter.com/jonathanjleung)
    - link to Twitter (https://twitter.com/jonathanjleung)
    - link to Github (https://github.com/jonleung)
```

## Click "Preview Running Application" again

![](img/h1.png)

The large text looks right.

YAY!

## Some Vocabulary

(so that you know how to talk and think about what we just did)

```html
<h1>Jonathan Leung</h1>
^ this is called  ^ this is called
  an opening        a closing tag
  tag 
```

```html
<h1>Jonathan Leung</h1>
 ^ this specifically is called an h1 tag
```

```html
<h1>Jonathan Leung</h1>
    ^^^^^^^^^^^^^^ this is called the inner html
```

```html
<h1>Jonathan Leung</h1>
^^^^^^^^^^^^^^^^^^^^^^^ this entire thing is called an element
```

## Next

[Adding a description](description_challenge.md)