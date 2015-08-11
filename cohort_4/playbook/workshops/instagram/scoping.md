# Scoping The Project

## Scooter Minimal

Say you wanted to build a transportation vehicle that let you travel as quickly
as possible across the US. Airplanes are fast—so perhaps building an airplane
would be an ideal solution?

Well, building an airplane is really hard. I might first want to try building
a car first. Well, even a car may be too hard. Maybe I'd want to build a bike
first. Well bikes still have all those complex gear things, maybe I'l build a
scooter first.

Cool, I can figure out how to build a scooter. I'm not saying that I'm not going
to build a bike, or a car, or an airplane—I just am going to build the scooter
first. Once I've had practice my building skills by building a scooter,
I then might try my hand at building a bike, and then a car, and then maybe even
an airplane!

## Analyzing the Airplane

I still want to eventually build the airplane, so I'm going to think about what
I want my product to look like at the very end and then figure out what the
scooter version of that is afterwards.

To do this, I'm going to look at the instagram app:

When I open the app, I can see a feed of all my and my friends photos:

![](https://i.imgur.com/kgA5917.jpg)

When I click the camera button, it opens the camera.

![](https://i.imgur.com/3RfQP9M.jpg)

When I tap on the circular blue button, it takes a picture of me and presents a
list of filter options I can apply to my photo.

![](https://i.imgur.com/23gAAxR.jpg)

When I click on a filter, it applies that filter to my photo.

![](https://i.imgur.com/fHwjUJF.jpg)

When I tap the "next" button, I see a screen that lets me share my photo.

![](https://i.imgur.com/W3x5QRI.jpg)

When I type in "Write a caption..." box, it lets me add a caption for my photo.

![](https://i.imgur.com/1gcPq3R.jpg)

When I tap Facebook, it enables the option that makes it so that when I tap the
"share" button, it will post on my Facebook wall.

![](https://i.imgur.com/9CtrDVr.jpg)

**So if I were to break down these components of the instagram app they are**

- newsfeed
- camera button
- take picture button
- filters
- caption
- share to social media

## Deciding What The Scooter Is

**So the most obvious features to remove are**

- the newsfeed
- sharing on social media

**Now we're left with**

- camera button
- take picture button
- filters
- caption

**Then you realize that the app would still be functional if you remove**

- filters
- caption

This leaves you with an app that lets you just take photos.

Now I challenged myself to make it even simpler:

- Instead of trying to take an actual photo from the camera, what if we used an
- existing photo that was already on the internet instead? The computer could
- just asked you for a URL of a picture and then it just added it to a page.

We have our scooter. We'll call it "Add Image To Page"

Next: [Iteration 1](iteration1.md)