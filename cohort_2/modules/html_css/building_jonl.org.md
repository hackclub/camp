## 1) Set Objective / Problem

I want to build a portfolio website template that others can use to:

1. tell people about themselves
2. showcase some of their work

## 2) Brainstorm

Good artists copy, the greatest artists steal.
Therefore, I'm going to research the portfolio websites of others on the internet and find ones that I like.

10 minutes later by googling `minimalist portfolio websites`, I found:

- [drawtempleton.com](http://www.drewtempleton.com/)
- [aleksfaure.com](http://aleksfaure.com/)
- [kerem.co](http://kerem.co/)
- [valentinoborghesi.is](http://www.valentinoborghesi.is/)
- [www.jacobgrubbe.com](http://www.jacobgrubbe.com/)
- [danielcgold.com](http://danielcgold.com/)
- [byalicelee.com](http://byalicelee.com)
- [vitor.co](http://vitor.co/)
- [simonfosterdesign.com](http://freefaces.simonfosterdesign.com/)
- [saschaeggenberger.com](http://www.saschaeggenberger.com/)
- [madebysofa.com](http://www.madebysofa.com/)
- [yaronschoen.com](http://yaronschoen.com/)

After going through all of these, I realized that I liked the style of [byalicelee.com](http://byalicelee.com)'s the most.

Specifically, I liked

1. it's simplicity
2. that it had a small description at the top
3. and a listing of her work

## 3) Define a Minimal Viable Product

Although her website has lots of photos on it, the *SIMPLIST* version of this website would only contain text.

Moreover, to make this first iteration even smaller, I'll only make the "about me" section first and not include any work (I don't have any anyways).

## 4) Write Iterations
1. write the text I want
2. transform it into HTML
3. write the CSS
	2. style the title
	3. style the subtitle
	4. style the description
	2. make the links
	6. I'll add more later

***Note: These first 3 steps are probably the same for almost any website you build***

## Iteration 1: Write the text I want

> #### Iterations:
1. write the text I want <––
2. transform it into HTML
3. write the CSS
4. ...

Copy and past the text from Alice's website.

**JS Bin**

- [See in JS Bin.](http://jsbin.com/sofuzo/1/edit?html,output)

**Preview:**
![](https://i.imgur.com/NzrSXCG.png)

**HTML:**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  - By Alice Lee
  - illustration, brand, letters
  - Hi! I am a SF-based illustrator and recovering biz school graduate who has drawn for The New York Times, Google, Sequoia Capital, Venmo, etc.
  - Previously, I was a designer & illustrator at Dropbox where I worked on the core Dropbox product, Carousel, and Mailbox. LEARN MORE →
</body>
</html>
```

b. Categorize your text into sections.

**JS Bin**

- [See in JS Bin.](http://jsbin.com/sofuzo/2/edit?html,output)

**HTML:**

```html
...
  <!--MAIN HEADING-->
    - By Alice Lee

  <!--SUB HEADING-->
  - illustration, brand, letters

  <!--DESCRIPTION PARAGRAPHS-->
  - Hi! I am a SF-based illustrator and recovering biz school graduate who has drawn for The New York Times, Google, Sequoia Capital, Venmo, etc.
  - Previously, I was a designer & illustrator at Dropbox where I worked on the core Dropbox product, Carousel, and Mailbox. LEARN MORE →
...
```

## Iteration 2: Transform it into HTML

> #### Iterations:
1. ~~write the text I want~~
2. transform it into HTML <––
3. write the CSS
4. ...

**JS Bin:**

- [See JS Bin](http://jsbin.com/sofuzo/3/edit?html,output
)

**Preview:**

![](https://i.imgur.com/okxszvu.png)

**HTML:**

```html
...
  <!--MAIN HEADING-->
  <h1> By Alice Lee </h1>

  <!--SUB HEADING-->
  <h2> illustration, brand, letters </h2>

  <!--DESCRIPTION PARAGRAPHS-->
  <p> Hi! I am a SF-based illustrator and recovering biz school graduate who has drawn for The New York Times, Google, Sequoia Capital, Venmo, etc.</p>
  <p>Previously, I was a designer & illustrator at Dropbox where I worked on the core Dropbox product, Carousel, and Mailbox. LEARN MORE → </p>
...
```

## Iteration 3: Add the Base CSS

> #### Iterations:
1. ~~write the text I want~~
2. ~~transform it into HTML~~
3. write the CSS
	2. style the title
	3. style the subtitle
	4. style the description <––
	2. make the links
	6. I'll add more later

**JS Bin**

- [See in JS Bin](http://jsbin.com/sofuzo/edit?html,css,output)

**Preview:**

![](https://i.imgur.com/2QjulPo.png)

**HTML:**

```html
...
  <!--MAIN HEADING-->
  <h1 class="name"> By Alice Lee </h1>
	<!-- NEW ^ -->

  <!--SUB HEADING-->
  <p class="subtitle"> illustration, brand, letters </p>
   <!-- NEW ^ -->

  <!--DESCRIPTION PARAGRAPHS-->
  <p class="description"> Hi! I am a SF-based illustrator and recovering biz school graduate who has drawn for The New York Times, Google, Sequoia Capital, Venmo, etc.</p>
  <p class="description">Previously, I was a designer & illustrator at Dropbox where I worked on the core Dropbox product, Carousel, and Mailbox. LEARN MORE →     </p>
   <!-- NEW ^ -->
...
```
**CSS:**

```css
body {
  font-family: "Georgia";
  color: rgb(68, 68, 68);
  font-size: .9em;
}

.name {
  font-family: "Lucida Sans Unicode", "sans-serif";
  font-size: 1.5em;
  font-weight: normal;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.subtitle {
  font-style: italic;
}

.description {
   line-height: 1.5em;
}
```

## Iteration 4: Make the link look like the link

> #### Iterations:
1. ~~write the text I want~~
2. ~~transform it into HTML~~
3. write the CSS
	1. ~~style the title~~
	2. ~~style the subtitle~~
	3. ~~style the description~~
	4. make the links <––
	6. I'll add more later

**JS Bin**

- [See in JS Bin](http://jsbin.com/sofuzo/5/edit)

**Preview:**

![](https://i.imgur.com/rKXwuEX.png)

**HTML:**

```html
...
  <!--DESCRIPTION PARAGRAPHS-->
  <p class="description">
  	Hi! I am a SF-based illustrator and recovering biz school graduate who has drawn for The New York Times, Google, Sequoia Capital, Venmo, etc.
  </p>
  <p class="description">
    Previously, I was a designer & illustrator at Dropbox where I worked on the core Dropbox product, Carousel, and Mailbox.
    <a href="http://byalicelee.com/about/">LEARN MORE →</a> <!-- NEW -->
  </p>
...
```
**CSS:**

```css
...

a {
  color: #fc6f44;
  /* Learn about color options here: http://html-color-codes.info/  */

}
```

## Iteration 5: Add a container with margin

> #### Iterations:
1. ~~write the text I want~~
2. ~~transform it into HTML~~
3. write the CSS
	1. ~~style the title~~
	2. ~~style the subtitle~~
	3. ~~style the description~~
	4. ~~make the links~~
	6. I'll add more later
	7. center the page <–– JUST ADDED

*Note: I added to my iteration before I kept working*

**JS Bin**

- [See in JS Bin](http://jsbin.com/sofuzo/8/edit?html,css,output)

**Preview:**

![](https://i.imgur.com/3fmqekN.png)

**HTML:**

```html
...
<body>

  <div class="container"> <!-- NEW -->

    <h1 class="name"> By Alice Lee </h1>
    <p class="subtitle"> illustration, brand, letters </p>
    <p class="description"> Hi! I am a SF-based illustrator and recovering biz school graduate who has drawn for The New York Times, Google, Sequoia Capital, Venmo, etc.</p>
    <p class="description">
      Previously, I was a designer & illustrator at Dropbox where I worked on the core Dropbox product, Carousel, and Mailbox.
	  <a href="http://byalicelee.com/about/">LEARN MORE →</a>
    </p>

  </div> <!-- NEW -->

</body>
...
```
**CSS:**

```css
body {
	...
}

/* NEW */
.container {
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
}

.name {
	...
}

...

```

## Tweak CSS

> #### Iterations:
1. ~~write the text I want~~
2. ~~transform it into HTML~~
3. write the CSS
	1. ~~style the title~~
	2. ~~style the subtitle~~
	3. ~~style the description~~
	4. ~~make the links~~
	7. ~~center the page~~
	8. I'll add more later
	9. tweak CSS <–– JUST ADDED
	10. add my own text

**JS BIN**

- [See in JS Bin](http://jsbin.com/sofuzo/9/edit)

**Preview:**

![](https://i.imgur.com/IY7khhy.png)

**HTML:** *Unchanged*

**CSS:** *(Changes only)*

```css
...

.container {
  ...
  max-width: 350px; /*Decreased for aesthetics*/
  ...
}

.name {
  ...
  font-size: 1.7em; /*Increased for aesthetics*/
  ...
  letter-spacing: 4px; /*Decreased for aesthetics*/
  ...
}

.subtitle {
  ...
  margin-bottom: 35px; /*Added for aesthetics*/
  ...
}

.description {
	...
   line-height: 2em;  /*Increased for aesthetics*/
   ...
}

a {
  ...
  text-decoration: none; /*Added for aesthetics*/
  ...
}

.link-out { /*NEW*/
  font-family: sans-serif;
  font-size: .7em;
  letter-spacing: .15em;
}
```

## Change text to Jonathan Leung

> #### Iterations:
1. ~~write the text I want~~
2. ~~transform it into HTML~~
3. write the CSS
	1. ~~style the title~~
	2. ~~style the subtitle~~
	3. ~~style the description~~
	4. ~~make the links~~
	7. ~~center the page~~
	9. ~~tweak CSS~~
	10. add my own text <––

**JS Bin:**

- [Link](http://jsbin.com/sofuzo/12/edit?html,css,output)

**Preview:**

![](https://i.imgur.com/nqURZSw.png)

**HTML:**

```html
...
  <div class="container">
    <!--MAIN HEADING-->
    <h1 class="name"> Jonathan Leung </h1>

    <!--SUB HEADING-->
    <p class="subtitle"> education, coding, non-profits </p>

    <!--DESCRIPTION PARAGRAPHS-->
    <p class="description"> I create experiences that empower people. I've worked with organizations like General Assembly, All Star Code, and PennApps, to do this. </p>
    <p class="description"> I graduated from Computer Engineering the University of Pennsylvania in '13 having and have built technology at the tech startups Perceptual Networks and Gobbler.
 	 </p>
    <p class="description">
      Currently my focus is to work with kids, parents, and relevant stakeholders to catalyze a new generation of change-makers with that have a high level of agency and empathy so that they may be ready to tackle the worlds problems.
      <a href="http://byalicelee.com/about/" class="link-out">LEARN MORE →</a>
    </p>
  </div>
...
```
**CSS:** *No CSS Modifications*

# DONE!
