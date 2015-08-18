# Figuring Out How To Do Something When A Button Is Clicked

In this section, the take away is less about "how do I write code to figures out when a button is clicked" and more about, how do I figure out how to do something like this if I didn't know how to do it.

## Next Step: Google

Here are a listing of Google queries sorted from the top down from worst to best.

- `know when the button is clicked and add an image`
    - Problem: You are coupling two problems, the button click, and adding the image. These are two independent problems! It will be easier to independently find and implement them.
- `know when the button is clicked`
    - Problem: You did not specifiy in what programming langauge
- `javascript know when the button is clicked`
    - Problem: The word "know" is unclear, what you really mean is "detect"
- `javascript detect when the button is clicked`
    - Problem: This sentence contains extraneous words
- `javascript detect button click`
    - Great.

Here are my first 3 results:

![](https://s3.amazonaws.com/f.cl.ly/items/2x36343u2N0L472u0F2T/Image%202015-07-17%20at%207.08.40%20AM.png)

### Next Step: Determining Which Google Results are Relevant

When I'm searching on Google, I'll open the first 3 results in new tabs so I can move between them easily.

For each of these pages, I try to answer the question "Is this page relevant to my problem?" as quickly as possible. If it is relevant, I will continue reading and try to do what they tell me, otherwise, I skip to the next Google result.

#### Analyzing the relevancy of the first result

[Here is the first Google result](http://stackoverflow.com/questions/2788191/how-to-check-whether-a-button-is-clicked-by-using-javascript), which a is a question on Stack Overflow.

![](https://s3.amazonaws.com/f.cl.ly/items/2Z430L423v2g0F2u1q33/Image%202015-07-17%20at%207.11.59%20AM.png)

**The following is a detailed note on understanding Stack (this) Stack Overflow Page(s).**

Note that this applies to Stack Overflow pages in general.

Stack overflow is a great Q&A resource that almost every programmer I (Jonathan) knows uses. Here is one helpful way I've found to parse Q&A type sites like Stack Overflow

##### Step 1: Read the Title

This step is done to determine relevancy.

So when I read the titleI read the title:

> How to check whether a Button is clicked by using JavaScript

This seems pretty relevant to me so I keep going.

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

##### Step 7: Debugging The Code

Hmmm, the code from above doesn't seem to work

One error in javascript may prevent *all* of your javascript from working. Therefore, you want to be able to know ASAP if there are any errors. The easiest way to do that is leave your developer console open.

To open up your developer console in Google Chrome (yes, please use Chrome, it has the best developer console)

- windows: `ctrl + shift + i`
- mac: `cmd + alt + j`

![](https://s3.amazonaws.com/f.cl.ly/items/433z0g281v0V0E242j47/Image%202015-07-17%20at%204.22.28%20AM.png)

From the above, we can see we have the error:

> Uncaught TypeError: Cannot set property 'onclick' of null

If we want to know exactly where the errors is in the code we can click on the right:

![](https://s3.amazonaws.com/f.cl.ly/items/3O2B37083s2f462v1Z0N/Image%202015-07-17%20at%204.24.40%20AM.png?t=1437132296160)

Which takes us to this screen:

![](https://s3.amazonaws.com/f.cl.ly/items/2d2F1V2D3S3t1d2X0I1q/Image%202015-07-17%20at%204.26.04%20AM.png)

Now on line 1 of the code, I can see red squiggles and a red 'x' telling me there is an error there but I'm still not sure what it means so I'm going to ask google:

![](https://s3.amazonaws.com/f.cl.ly/items/45171Y1s3R0Z42071A0e/Image%202015-07-17%20at%207.36.48%20AM.png)

And I open the first 3 pages in new tabs:

##### Analyzing the [1st Google Result](http://stackoverflow.com/questions/9778888/uncaught-typeerror-cannot-set-property-onclick-of-null)

- the title "Uncaught TypeError: Cannot set property 'onclick' of null" is relevant
- looking at the answers, this answer with 21 votes seems to be voted the highest and has the easiest to understand example:

![](https://s3.amazonaws.com/f.cl.ly/items/0A3Z3k2Z3x0M2r402x42/Image%202015-07-17%20at%204.28.59%20AM.png)

I think this means that I put my code where it says 
`// your code`
but I'm not necessarily sure what code needs to be in here.

##### Analyzing the [2nd Google Result](http://stackoverflow.com/questions/17080502/uncaught-typeerror-cannot-set-property-onclick-of-null)
- the title "Uncaught TypeError: Cannot set property 'onclick' of null" is relevant 
- looking at the answers, the best answer is 4 upvotes with "asker's choice"

![](https://s3.amazonaws.com/f.cl.ly/items/0T003P1z1u2F041d0K3F/Image%202015-07-17%20at%204.31.43%20AM.png)

Ah, so it seems that the code that I t in `// your code` is whatever I am looking for. At this point I could try to isolate this code to test it out but because this piece of code seems pretty tightly coupled to the code I have already written, I will just write this directly in the `main.js` file to this:

```js
// main.js

window.onload = function() {
  document.getElementById('button').onclick = function() {
     alert("Click click of the camera!");
  };
};
```

And hurray! It works!!

## Noticing A Pattern

A lot of the code you will be working with will be to

- get some element
- when something happens to that element
  - do something else

In this particular case, we are saying
- Let's use this `document.getElementById('button')` to find the one element on the page with the `id` `button`.
- Then when we click on it
  - Make an alert

Note that the code from above can also be rewritten as. To me personally, the below is clearer than the above.

```js
// main.js

window.onload = function() {
  
  // get some element
  var button = document.getElementById('button');

  var takePhoto = function() {
    alert("Click click of the camera!");
  }
  
  // when something happens to that element (in this case on a click)
    // call the function `takePhoto`
  button.onclick = takePhoto;
};
```

Also just as a note, you can also write it this way below:

```js
// main.js

window.onload = function() {

  // get some element
  var button = document.getElementById('button');

  function takePhoto() {
    alert("Click click of the camera!");
  }
  
  // when something happens to that element (in this case on a click)
    // call the function `takePhoto`
  button.onclick = takePhoto;
};
```

Next, [asking the user for input](user_input.md)

