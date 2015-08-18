# Building Instagram

## What are we building?

Say for one of my own personal projects, I decided that I wanted to build 
Instagram. When you think of Instagram, I think fancy filters and sharing 
photos on social media. However for my initial version, I will make something
as simple as possible. Not that I won't do the fancy things, I'll just get 
something done first.

## A demo of the really simple version of instagram:

[A demo](http://jsbin.com/cacaqa) of what we're building.

## Already familiar with the DOM? Need something harder?

Take a look at [this live demo](https://rawgit.com/hackedu/hack-camp/e8f9e9324fc535011ac7f3da62315175b355238b/cohort_4/playbook/workshops/instagram/src/index.html)

I challenge you to understand [the code](https://github.com/hackedu/hack-camp/tree/0b986fc2c7f61851e188ee8efaa72fb5b81e44f0/cohort_4/playbook/workshops/instagram/src) (debugger is your friend) and remix it into your own application!

## How might we do this?

We need to write code that does the following:

When user clicks the 'upload' button:

1) I need to ask the user for a link to the URL of an image on the internet
2) I need to add that image to my HTML page.

## What are we learning?

One of the primary objectives is for you to learn the fundamentals of 
Computer Science.

In the first workshop, we used HTML by itself.

In the second workshop we used JavaScript by itself.

In this workshop, we are going to integrate HTML with JavaScript.

## The differences between HTML and JavaScript

In the first workshop, you added image, header, and link elements to an 
HTML page.

JavaScript can interact with those HTML elemetns by moving those elements
around, making more elements, and remove elements entirely.

## How this tutorial is layed out

In order to build this, you must first understand the fundamentals of 
computer science.

We will then go through an analogous example of adding an image with a real life
analogy.

Both of the above are on this page.

## Questions you should be able to answer after this tutorial

*Just skim this list, we'll ask the questions after each section.*

**Fundamental Computer Science concepts**

- What is a variable?
- What are variables used for?
- What is a function?
- What is a function's input, action and output?
- What is an example of a JavaScript object?
- What is a JavaScript object's properties?
- What are some examples of a JavaScript object's properties?
- What is a JavaScript object's functions?
- What are some examples of a JavaScript object's functions?

### Functions

Functions are verbs. They usually are some kind of action, or change something 
in some way. For example eat, move, turn on could all be functions.

A function can have the following components:

- input
- action
- output

In the case that a function has an input and output, you can say if you give 
the function an input, it will give you back some output.

#### Math analogy

If you _**were**_ the `double` function (yes, you the person reading this):

- if I "called" you with an **input** of `3`
- you would give me back an **output** of `6`

--

- if "called" the **input** of `10`
- you would give me back an **output** of `20`

Note that "calling" means to "execute" the function with a given input.

#### Harry Potter analogy

In Harry Potter, there is a magic spell called "accio".

If you said "accio car keys", your car keys would magically fly towards you. 
Pretty useful if you've lost your car keys and had no idea where they were.

If you _**were**_ the `accio` function

- if I **called** with the words `my missing sock` as an **input**
- the **action** of my socks hurtling through the room would occur
- and you would give me the **output** of my actual physical socks that were 
  missing

--

- if I **called** with the words `pot on the top shelf` as an **input**
- the **action** of the pot flying down from the top shelf would occur
- and you would give me back the **output** of the actual physical pot that 
  was on the top shelf

#### Formally writing these

If I turn the above examples into formal code, it would look like this:

```js
double(3);
//^^^^ `double` is the name of my function

double(3);
//     ^ `3` is my input

double(3); // => the output of this function is `6`

// I can describe this by saying "I am calling the double function with the 
// input of 3"
```

```js
accio("my missing sock");
//^^^ is the name of my function

accio("my missing sock");
//    ^^^^^^^^^^^^^^^^^ is my input

accio("my missing sock"); // => the output is my actual physical sock

// I can describe this by sayning "I am calling the accio function with
// the input of 'my missing sock'"
```

#### An example of the `prompt` function

Say that you were the `prompt` and you were called in the following way:

```js
prompt("Hello, what is your name?")
```

- I gave you the __input__ of `"Hello, what is your name?"`
- you would then perform the __action__ of making a popup box appear with 
  the question `"Hello, what is your name?"` and a blank input field for 
  the user to type in.
- you would then give me back the __output__ of whatever the user typed in.

--

### Variables

Great, so now I've used the `accio` function to find my missing sock.

```js
accio("my missing sock");
```

In the line of code above, I have no way of referring to that sock that it 
gave to me *unless* I have a **reference** to it through a variable. To 
reference the sock the `accio` function outputs, I can do something like this:

```js
var sock = accio("my missing sock")
```

Now in the rest of the program, whenever I use the variable `sock`, the program 
knows what I am **referencing**. Another way I could say this is that the `sock` 
variable **refers** to my actual physical sock. Another way I could say it is 
that the `sock` variable **points** to my actual physical sock.

#### An example with the `prompt` function

So if I prompted the user for their name like this:

```js
prompt("Hello, what is your name?")
```

because I didn't **assign** a variable to the output of this function, I have 
no way of being able to **refer** to the output of this function ever again.

If the user types in `"Jonathan"`, I want to be able to reference that in the 
program again so I assign the output of the `prompt` function to a variable:

```js
var name = prompt("Hello, what is your name?")
```

Now I can do something like

```js
var name = prompt("Hello, what is your name?")
var message = "Hello" + name;
alert(message);
```

This sets the variable "name" as the item you type into the prompt input box, 
then sets the variable "message"  to be equal to "Hello" and the name you 
entered.  Then an alert box pops up with the contents of the message variable.

### Objects

In programming, one way we try to model the world is through what we call an 
**object**.

#### Properties

An **object** can have many **properties**.

Let's model me, the author of this tutorial, as an object.

One of my properties is my `name`. The value of that property is the string 
`"Jonathan"`

Another one of my properties is my `age` The value of my `age` property is 
the number `24`.

To make an empty object in JavaScript I can write `{}`
and so that I can refer to it later, I have to have a variable **point** 
to it:

```js
var person1 = {};
```

Now I can assign it some properties like so

```js
person1.name = "Jonathan";
person1.age = 24
```

If I want to retrieve the values of any properties I can just do this:

```js
person1.age // this would give me back 24
person1.name // this would give me back "Jonathan"
person1.height // this would give me back `undefined` because 
               // I didn't assign the height property yet

```

```
Object Properties Challenge Time!
            __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

How to do this challenge:

    Ask the people sitting next to you "Have you gotten to Object Properties
    Challenge yet?" If they did it in the past or are about to do it, work with
    them on this challenge.

    If you can't find anyone that has reached this section yet, chat with a 
    facilitator about it!

The actual challenge:

    With your pair, think of another object (besides a person) and discuss 
    what its properties might be and values they might have.

    Another examples of another object is a car. Its properties could be make,
    model, year, gas mileage, etc.
```

#### Functions can be properties of objects too!

Think of an object's functions as actions they may perform.

For example a person may walk, talk, program, sleep, eat, etc.

For our person, you could define the `walk` function like this

```js
person1.walk = function() {
    // move your right foot up
    // move your right foot forward
    // move your right foot down
    // move your left food up
    // move your left foot down
    // move your left foot forward
    // ...
}
```

For taking something

```js
person1.take = function(thing) {
    // use your right hand
    // take the thing
}
```

The `thing` in between the parentheses is called a **parameter**, which 
means that you need this "thing" for the function to work. To explain it 
for this specific case, you can't just take nothing - you have to take a
thing, for this to work.

To retrieve the values of these properties, we can do

```js
person1.walk // this would give me back the function with all the code I  
             //wrote to walk:
```
    In the console, this would print: 
    ```js
    function() {
        // move your right foot up
        // move your right foot forward
        // move your right foot down
        // move your left food up
        // move your left foot down
        // move your left foot forward
        // ...
    }
  ```
  
  ```js
  person1.eat // this would give me back the function with all the code 
              // I  wrote to eat:
  ```
    In the console, this would print: 
    ```js
    function() {
        // use your right hand
        // take the thing
    }    
  ```

To actually run the function of an object, I can do

```js
person1.walk(); // this will run each line of code in the person1.walk 
                // function one line at a time

// lets say that `apple` is defined to be a variable that references
// an actual apple.

person1.eat(apple); // this will run each line of code in the person1.take 
                    // the person now has an apple
```

```
Object Properties what are functions time!
            __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

How to do this challenge:

    Ask the people sitting next to you "Have you gotten to challenge 1 yet?"
    If they did it in the past or are about to do it, work with them on this 
    challenge.

    If you can't find anyone that has reached this section yet, chat with a 
    facilitator about it!

The actual challenge:

    With your pair, think of an object (feel free to use the objects that you
    came  up from your first challenge) and discuss what they might do - 
    basically the properties of the object.

    For a car, its properties that are functions could be drive, refill gas, 
    turn on wind shield wiper.
```

## The Coffee Shop Analogy

Say you're Alice, the creator of a take out coffee shop. Your coffee shop is run 
inside of a very high tech room that can:

1. Create any object you want
2. Find any object that is inside of the room given the identifier (name) of 
    the object

(*Don't read too much into the analogy, it's not perfect.*)

### How the coffee shop works:

Right now you need to program the part of the room that takes care of the 
take-out orders.

Here are the steps that you need:

```
- When the operating system says that the room is running is ready,
    - program the take-out phone so that
        - when someone calls the take-out phone in the coffee shop,
          the following will happen:
            - ask them for their name
            - actually make the cup of coffee
            - write their name on the cup of coffee
            - put the cup of coffee on the take-out counter
```

**Note that in the room, I already have**

- a take-out phone
- a take-out counter

### What code can I write?

```js
room // is a defined variable that refers to the magical room

room.createThing("mac-book-air") // creates and outputs a reference 
                                 //to a brand new mac book air
room.createThing("organic-apple-sauce") // creates and outputs a 
                                        //reference to organic apple sauce

room.getThing("couch-with-large-stain") // finds and gets location to the 
                                       //couch with the large stain on it

room.getThing("my-glasses") // finds my and outputs a reference to my glasses

// note that the input to the above functions cannot have spaces
```

**IMPORTANT: PAY CLOSE ATTENTION HERE:**

Also, whenever the take out phone rings, the room will **automatically** call 
the phone's `onring` function.

So for example if I had:

```js
phone.onring = function() {
    alert("The phone is ringing");
}
```

So because whenever the phone rings, the room will **AUTOMATICALLY** run 
the `phone.onring` function. This means that you never have to call the 
`phone.onring()` function yourself, the room **AUTOMATICALLY** calls it!

Moreover, when the operating system of the room is finished loading, it 
will also **AUTOMATICALLY** call whatever function you define as 
`system.onload`. 

Therefore you can put any code in there that you want to run after the 
operating system is ready (which is all of it because you don't want to 
run any code until the operating system is ready).

```js
system.onload = function() {
    alert("The operation system is ready");
}
```


### Writing the code

**Asking for their name**

The first thing I do is ask for their name.

```js
prompt("What is your name?");
```

**Then I can create the coffee**

```js
prompt("What is your name?");
room.createThing("cup-of-coffee");
```

**Now I can set the coffee cup's name attribute to the name the person 
gave me on the phone**

CRAP! I don't know how to refer to the person's name that I asked for 
or the coffee that I created!

What do I do?!

```
Challenge Time!
            __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

Stop here for a minute and think about how you could solve this problem.
```

**Solution**

I could store a reference to what their name was and the coffee cup as well!

```js
var nameOfPerson = prompt("What is your name?");
var coffeeCup = room.createThing("cup of coffee");
coffeeCup.name = nameOfPerson;
```

**Now I have to find the take-out counter to put the coffee on**
There's already a take-out counter in the room so I don't need to create one. 
However, I don't have a reference to it yet so before I can even put the coffee 
on the take-out counter, I must 

```js
var nameOfPerson = prompt("What is your name?");
var coffeeCup = room.createThing("cup-of-coffee");
coffeeCup.name = nameOfPerson;

var takeOutCounter = room.getThing("take-out-counter")
```

**Finally I need to put the coffee cup in the pickup-area**

```js
var nameOfPerson = prompt("What is your name?");
var coffeeCup = room.createThing("cup-of-coffee");
coffeeCup.name = nameOfPerson;

var takeOutCounter = room.getThing("take-out counter")
takeOutCounter.put(coffeeCup);
```

***Yay, am I done yet?***

**Almost! I want to run the code I wrote above whenever someone calls me on my 
take-out phone!**

Ok. So it seems like I need to program the take-out phone in this room as well 
and whenever it rings, I need it to run the code that I wrote above.

Let's first find the phone:

```js
var phone = room.getThing("take-out-phone");
```

Then whenver the phone rings, this magic phone will automatically call any code 
inside of the `phone.onring` function, by itself.

```js
var phone = room.getThing("take-out-phone");

phone.onring = function() {
    // any code here will be run when the phone rings
}
```

Therefore, I want to put the code I wrote above in the `phone.onring` function, 
like this:

```js

// find the take-out-phone
var phone = room.getThing("take-out-phone");

// the function phone.onring, 
// will be automatically called when the phone rings
phone.onring = function() {
    var nameOfPerson = prompt("What is your name?");
    var coffeeCup = room.createThing("cup-of-coffee");
    coffeeCup.name = nameOfPerson;

    var takeOutCounter = room.getThing("take-out-counter")
    takeOutCounter.put(coffeeCup);
}
```

***Yay, am I done yet?***

Almost!

Right now the ANY TIME the phone rings, it prepares a cup of coffee. We only 
want to do this when the operating system is ready or else the room could break.

This will solve the problem!

```js
//  system.ready function is AUTOMATCAILLY called by the room whenever it's 
//  operating system is ready. Therefore, there is NO code that runs until 
//  the operating system is ready.

system.onload = function() {

    var phone = room.getThing("take-out-phone");

    phone.onring = function() {
        var nameOfPerson = prompt("What is your name?");
        var coffeeCup = room.createThing("cup-of-coffee");
        coffeeCup.name = nameOfPerson;

        var takeOutCounter = room.getThing("take-out counter")
        takeOutCounter.put(coffeeCup);
    }

}
```


### Running through the code:

Note that code that is commented in the below example is not executed at the 
given moment whereas code that is not commented is currently being executed.

1. When the code first runs: the only thing that happens is the definition of 
    the `system.onload` function. None of the code in the `system.onload` 
    function is executed yet.

    ```js
    system.onload = function() {
    //    var phone = room.getThing("take-out-phone");
    //
    //    phone.onring = function() {
    //        var nameOfPerson = prompt("What is your name?");
    //        var coffeeCup = room.createThing("cup-of-coffee");
    //        coffeeCup.name = nameOfPerson;
    //
    //        var takeOutCounter = room.getThing("take-out counter")
    //        takeOutCounter.put(coffeeCup);
    //    }
    }
    ```

2. Whenever the operating system has finished loading (it could be seconds, 
    it could be hours), the code defined inside `system.onload` runs. Note 
    that the code inside the `phone.onring` function however doesn't run yet.

    ```js
    //system.onload = function() {
          var phone = room.getThing("take-out-phone");
    //
          phone.onring = function() {
    //        var nameOfPerson = prompt("What is your name?");
    //        var coffeeCup = room.createThing("cup-of-coffee");
    //        coffeeCup.name = nameOfPerson;
    //
    //        var takeOutCounter = room.getThing("take-out counter")
    //        takeOutCounter.put(coffeeCup);
          }
    //}
    ```

3. Then whenever the phone rings (it could be minutes, it could be hours), the 
    code inside the `phone.onring` function is run

```js
//system.onload = function() {
//    var phone = room.getThing("take-out-phone");
//
//    phone.onring = function() {
          var nameOfPerson = prompt("What is your name?");
          var coffeeCup = room.createThing("cup-of-coffee");
          coffeeCup.name = nameOfPerson;
  
          var takeOutCounter = room.getThing("take-out counter")
          takeOutCounter.put(coffeeCup);
//    }
//}
```

Congratulations! We did it!

```
Challenge Time!
            __
           / _)   
    .-^^^-/ /
 __/       /
<__.|_|-|_|

Now go up to your facilitator and try to explain back the above example to them 
to make sure you understand it!

They will give you feedback on what you're understanding and what you still need 
clarified!
```

## Next 

[Step 1](iteration1.md)
