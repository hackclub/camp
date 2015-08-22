# Figuring Out How To Do Something When A Button Is Clicked

In this section, the take away is less about "how do I write code to figures out
when a button is clicked" and more about, how do I figure out how to do something like this if I didn't know how to do it.

## Next Step: Google

Here are a listing of Google queries sorted from the top down from worst to best.

- `know when the button is clicked and add an image`
    - Problem: You are coupling two problems, the button click, and adding the 
      image. These are two independent problems! It will be easier to independently find and implement them.
- `know when the button is clicked`
    - Problem: You did not specifiy in what programming langauge
- `javascript know when the button is clicked`
    - Problem: The word "know" is unclear, what you really mean is "detect"
- `javascript detect when the button is clicked`
    - Problem: This sentence contains extraneous words
- `javascript detect button click`
    - Great.

Here are my first 3 results:

> ![](https://s3.amazonaws.com/f.cl.ly/items/2x36343u2N0L472u0F2T/Image%202015-07-17%20at%207.08.40%20AM.png)

### Next Step: Determining Which Google Results are Relevant

For any Google result I look at,  I try to answer the question "Is this page
relevant to my problem?" as quickly as possible. If it is relevant, I will 
continue reading and try to do what they tell me, otherwise, I skip to the next
Google result.

#### Analyzing the relevancy of the first result

[Here is the first Google result](http://stackoverflow.com/questions/2788191/how-to-check-whether-a-button-is-clicked-by-using-javascript), which a is a question on Stack Overflow.

> ![](https://s3.amazonaws.com/f.cl.ly/items/2Z430L423v2g0F2u1q33/Image%202015-07-17%20at%207.11.59%20AM.png)

**The following is a detailed note on understanding this Stack Overflow page.**

Note that this applies to Stack Overflow pages in general.

Stack overflow is a great Q&A resource that almost every programmer I (Jonathan)
knows uses. Here is one helpful way I've found to parse Q&A type sites like 
Stack Overflow

##### Step 1: Read the Title

This step is done to determine relevancy.

So when I read the title:

> How to check whether a Button is clicked by using JavaScript

I realize that it seems pretty relevant, so I keep going.

##### Step 2: Skip To the Answers

I skip the rest of the question because the title has already told me that the 
question is relevant to me, so therefore the answers must be also.

Once in the answers section, I look for the answer with the most upvotes and / 
or has the green checkmark (the answer selected to be the best by the person who asked the question is marked in green).

In this case, the best answer was:

> ![](https://s3.amazonaws.com/f.cl.ly/items/3p0j0q1H2f1w1T1Y2n20/Image%202015-07-16%20at%207.18.26%20PM.png)

- it has the most upvotes (16)
- and has the asker's choice

##### Step 3: Test the Answer

So instead of taking code that you immediately find and trying to apply it to 
your code immediately, I usually run the example code by itself first. I personally like using a site like [JSBin](http://jsbin.com)

In this case however, the answer provides an already working example in a JS 
Fiddle.

> ![](https://s3.amazonaws.com/f.cl.ly/items/2K0t362z2G282l011o0A/Image%202015-07-17%20at%207.24.01%20AM.png)

And so I test it out to see if pressing the button does anything and it indeed 
makes an alert every time I press enter!

> ![](https://s3.amazonaws.com/f.cl.ly/items/3U1Y2w0p0x3e0p0w3Z1V/Image%202015-07-16%20at%207.25.15%20PM.png)

```
Normally, I would recommend that you play around with this example as well, but 
for time reasons, just skip it for now.

Here is the link to the JS fiddle for futures reference:

    http://jsfiddle.net/6qDap/1/
```

Great! Now I have validated that I have found working code that lets me detect 
when a button is clicked!

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

It's easiest for me to understand something when I'm working with the bare 
bones.  I want to make sure that I understand the example, so I'll remove as
many things as possible to allow it to still work.

This makes it seem like I can remove this stuff about `count` in the javascript 
which leaves me with [this code](http://jsfiddle.net/6qDap/1609/)

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

The above looks very similary to my code in the coffee shop example:

```js
var phone = room.getThing("take-out-phone");
phone.onring = function() {
  // ask for their name and make the coffee
}
```

except they combined it together. If we combined our code in the coffee shop
example, we would have this:

```js
room.getThing("take-out-phone").onring = function() {
  // ask for their name and make the coffee
}
```

basically instead of making a reference to the phone with a `phone` variable,
they did the `.onring` directly on the output of 
`room.getThing("take-out-phone")`

Let's rewrite their example so that it looks like ours:

```js
// Javascript Code
var addPictureButton = document.getElementById('button');
addPictureButton.onclick = function() {
   alert("button was clicked");
};
```

[![](https://i.imgur.com/9KuKZGN.png)](http://jsfiddle.net/nL0tb9bp/)

What does this code mean?

##### Understanding just the first line:

```js
var addPictureButton = document.getElementById('button');
```

In our coffee shop code, the `room` was the `room` that EVERYTHING in the coffee
shop was in side of.

In this HTML code, the `document`, which refers to the entire "HTML document" is
the room that all HTML elements are inside of.

Instead of `room.getThing("take-out-phone")`, which outputs a reference to the 
take out phone inside of my room, `document.getElementById("button")`  gets me a
reference to the element that has the attribute `id` that has a value of 
`button`.

If I look at my HTML code again:

```html
<!--HTML Code-->
<input id="button" type="submit" name="button" value="enter"/>
```

I see that the above `<input>` tag has the attribute `id` with a value of 
`button`.

Therefore 

`document.getElementById("button")` gives me a reference to that `<input>` 
element.

##### Understanding just the first and second line:

```js
var addPictureButton = document.getElementById('button');
addPictureButton.onclick = function() {
   alert("button was clicked");
};
```

then just like how the function I define to be `phone.onring` is automatically
called when the phone rings, the function I define to be
`addPictureButton.onclick` is automatically called when the button I reference
in the `addPictureButton` variable is clicked. This effectively makes an alert
whenever that button is clicked.

##### Step 5: Tinkering for Understanding

I find that messing around the code by removing as much as possible until the
example doesn't work any more really helps me understand things.

```
Note: Normaly I would recommend that you watch this video for how I did this but
for time reasons, I'd recommend that you skip this for now and come back if you 
have time:

    https://www.youtube.com/watch?v=HlVbolRGz4o

```

##### Step 6: Now I'll try to add it to my code:

**WARNING: BELOW CODE DOES NOT WORK AND CAUSES AN ERROR**

```html
<!--index.html-->

<!DOCTYPE html>
<html>
  <head>
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

var addPictureButton = document.getElementById('button');
addPictureButton.onclick = function() {
   alert("button was clicked");
};
```

##### Step 7: Debugging The Code

Hmmm, the code from above doesn't seem to work

One error in javascript may prevent _**ALL**_ of your javascript from working.
Therefore, you want to be able to know ASAP if there are any errors. 
The easiest way to do that is leave your developer console open.

_**I HIGHLY RECOMMEND ALWAYS HAVING YOUR DEVELOPER CONSOLE OPEN**_

To open up your developer console in Google Chrome (yes, please use Chrome, 
it has the best developer console)

- windows: `ctrl + shift + i`
- mac: `cmd + alt + j`

> ![](https://s3.amazonaws.com/f.cl.ly/items/433z0g281v0V0E242j47/Image%202015-07-17%20at%204.22.28%20AM.png)

From the above, we can see we have the error:

```
Uncaught TypeError: Cannot set property 'onclick' of null
```

If we want to know exactly where the errors is in the code we can click on the
right:

> ![](https://s3.amazonaws.com/f.cl.ly/items/3O2B37083s2f462v1Z0N/Image%202015-07-17%20at%204.24.40%20AM.png?t=1437132296160)

Which takes us to this screen:

> *(sorry the below screenshot is not updated to match the most recent code but
> the error is essentially the same)*

> ![](https://s3.amazonaws.com/f.cl.ly/items/2d2F1V2D3S3t1d2X0I1q/Image%202015-07-17%20at%204.26.04%20AM.png)

Now on line 1 of the code, I can see red squiggles and a red 'x' telling me 
there is an error there but I'm still not sure what it means. Therefore, I copy
and paste my error directly into Google:

> ![](https://s3.amazonaws.com/f.cl.ly/items/45171Y1s3R0Z42071A0e/Image%202015-07-17%20at%207.36.48%20AM.png)

And I open my first Google result:

##### Analyzing the [1st Google Result](http://stackoverflow.com/questions/9778888/uncaught-typeerror-cannot-set-property-onclick-of-null)

- the title `Uncaught TypeError: Cannot set property 'onclick' of null` seems 
  relevant
- looking at the answers, this answer with 21 votes seems to be voted the 
  highest and has the easiest to understand example:

> ![](https://s3.amazonaws.com/f.cl.ly/items/0A3Z3k2Z3x0M2r402x42/Image%202015-07-17%20at%204.28.59%20AM.png)

I think this means that I put my code where it says 
`// your code`

inside of a 

```js
window.onload = function() {
  
}
```
but I'm not necessarily sure what code needs to be in here.

##### Analyzing the [2nd Google Result](http://stackoverflow.com/questions/17080502/uncaught-typeerror-cannot-set-property-onclick-of-null)
- the title "Uncaught TypeError: Cannot set property 'onclick' of null" is 
  relevant 
- looking at the answers, the best answer is 4 upvotes with "asker's choice"

> ![](https://s3.amazonaws.com/f.cl.ly/items/0T003P1z1u2F041d0K3F/Image%202015-07-17%20at%204.31.43%20AM.png)

Ah, so it seems that I do in fact want to put my code inside of the 
`window.onload`. At this point I could try to isolate this code in a JS BIN to
test it out but because this code seems pretty simple, I will just add this
above my code:

```js
window.onload = function() {
```

and I will add this below my code
  
leaving me with this:

```js
// main.js

window.onload = function() {
    document.getElementById('button').onclick = function() {
        alert("Click click of the camera!");
    };
};
```

And hurray! It works!! A popup appears when I click the button.

## Understanding the code

This segment looks similar to the coffee shop code as well:

**Coffee Shop Example**
```js
system.onload = function() {
    var phone = room.getThing("take-out-phone");
    phone.onring = function() {
      // ask for their name and make the coffee
    }
}
```

**Our Current Code**
```js
window.onload = function() {
    var addPictureButton = document.getElementById('button');
    addPictureButton.onclick = function() {
        alert("button was clicked");
    };
};
```

Just like `system` is an object with the property `onload`,

`window` is also an object with the property `onload`

Just like how the the function I define to be `system.onload` is automatically
called when the `room`'s operating system finishes loading, the function I 
define to be `window.onload` is automatically called when the browser finishes all the elements on the page.

Next, [asking the user for input](user_input.md)

