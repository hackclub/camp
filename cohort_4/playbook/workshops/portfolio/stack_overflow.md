## Understanding Stack Overflow

Stack overflow is a great Q&A resource that almost every programmer I (Jonathan) knows uses. Whenever I see a Stack Overflow result in my Google search, there is a high likelyhood I may open that result first. Here is one helpful way I've found to understand Q&A type sites like Stack Overflow

**This is a brief digression into how you might go about interpreting Q&A type sites like Stack Overflow.**

##### Step 1: Read the Title

This step is done to determine relevancy.

So when I read the titleI read the title:

> Resize image proportionally with CSS?

This seems pretty relevant. I keep going.

##### Step 2: Skip To the Answers

I skip the rest of the question because the title has already told me that the question is relevant to me, so therefore the answers must be also.

Once in the answers section, I look for the answer with the most upvotes and / or has the green checkmark (the answer selected to be the best by the person who asked the question is marked in green).

In this case, the best answer was:

![](https://s3.amazonaws.com/f.cl.ly/items/3p0j0q1H2f1w1T1Y2n20/Image%202015-07-16%20at%207.18.26%20PM.png)

- it has the most upvotes (16)
- and has the asker's choice

##### Step 3: Test the Answer

So instead of taking code that you immediately find and trying to apply it to your code immediately, I usually run the example code by itself first. I personally like using a site like [JSBin](http://jsbin.com)

In this case however, the answer provides [an already working example in a JS Fiddle](http://jsfiddle.net/6qDap/1/):

![](https://s3.amazonaws.com/f.cl.ly/items/2K0t362z2G282l011o0A/Image%202015-07-17%20at%207.24.01%20AM.png)

And so I test it out to see if pressing the button does anything and it indeed makes an alert every time I press enter!

![](https://s3.amazonaws.com/f.cl.ly/items/3U1Y2w0p0x3e0p0w3Z1V/Image%202015-07-16%20at%207.25.15%20PM.png)

Great! Now I have validated that I have found working code that lets me detect when a button is clicked!

For your convienience, here is the code from the example:

```html
<!--HTML Code-->
<input id="button" type="submit" name="button" value="enter"/>
```

```js
// Javascript Code
var count = 1;
document.getElementById('button').onclick = function() {
   alert("button was clicked " + (count++) + " times");
};
```

[![](https://i.imgur.com/9KuKZGN.png)](http://jsfiddle.net/6qDap/1)

#### Step 4: Cleaning Up For Understanding

It's easiest for me to understand something when I'm working with the bare bones.  I want to make sure that I understand the example, so I'll remove as many things as possible to allow it to still work.

This makes it seem like I can remove this stuff about `count` in the javascript which leaves me with [this code](http://jsfiddle.net/6qDap/1609/)

```html
<!--HTML Code-->
<input id="button" type="submit" name="button" value="enter"/>
```

```js
// Javascript Code
document.getElementById('button').onclick = function() {
   alert("button was clicked");
};
```

[![](https://i.imgur.com/9KuKZGN.png)](http://jsfiddle.net/6qDap/1609/)

##### Step 5: Tinkering for Understanding

I find that messing around the code by removing as much as possible until the example doesn't work any more really helps me understand things.

[Here's a video](https://www.youtube.com/watch?v=HlVbolRGz4o) I put together of me doing this.

##### Step 6: Now I'll try to add it to my code:

Warning: BELOW CODE DOES NOT WORK

```html
<!--index.html-->

<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="main.css">
    <script src="main.js"></script>
  </head>
  <body>
    <h1>Instagram</h1>
    <input id="button" type="submit" name="button" value="Add Photo"/>  
  </body>
</html>
```

```js
// main.js

document.getElementById('button').onclick = function() {
   alert("Click click of the camera!");
};
```


