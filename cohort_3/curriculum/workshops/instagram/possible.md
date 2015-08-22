# Budiling Instagram!

I have decided I want to build my own version of Instagram. This is literally how I did it.

# Part 1: Figuring Out If It's Possible

There are two core features of Instagram:

- taking photos
- adding filters on those photos

If I can't do that, then I can't build Instsagram. Therefore, I want to validate that I can even do that first. 

## 1. Can I Take Pictures?

I want my app to be able to take pictures on an actual phone. I have no idea how to do this so I Google.

### Googling For Taking Pictures

- `how do I take photos in my app`
    - problem: you are not building an app, you are building a website
- `how do I take photos on my website`
    - problem: you don't mention you're trying to use javascript
- `how do I take photos on my website javascript`
    - problem: the phrases `how do I` and `on my website` are extraneous, omit then and try
- `take photos javascript`
    
Ok, now we have some results:

![](https://s3.amazonaws.com/f.cl.ly/items/0E2n1f3t1V0L181t0l2O/Image%202015-07-16%20at%204.52.34%20PM.png)

- Normally, I usually open the first 3 links in new tabs but because I see `developer.mozilla.org` and I know that it is a legit, I open [the first link](https://developer.mozilla.org/en-US/docs/Web/Guide/API/Camera).

### Checking For Relevancy The Resource

#### Relevancy:
The first thing I want to make sure that this article is relevant to my problem:

I read the title:
> Introduction to the Camera API
 
^ Sounds promising... I continue reading...

![](https://s3.amazonaws.com/f.cl.ly/items/3d4010271F2g0A2b2p35/Image%202015-07-16%20at%204.43.17%20PM.png)

^ Cool! This tells me I can take pictures with my device's camera, exactly what I want!

#### Will Those Code Work?

The next thing I'll immediately look for is some type of working example. I want to make sure that if I follow all the stuff on the page, my code will be able to take a photo.

I scroll down to the bottom of the page and see:

![](http://f.cl.ly/items/441S3U2I3a1f3o2G1k1x/Image%202015-07-16%20at%204.46.21%20PM.png)

I open the link ([http://robnyman.github.com/camera-api/](http://robnyman.github.com/camera-api/)) on my phone and test to see if it works...

And YES, it does!

Great, now I've found code that I know that works and it is likely that if I follow the instructions, I'll be able to take a photo on my phone. Note that I still have NO idea how to use this code, but that's for me to figure out later.

## 2. Can I add filters?

For the photos that I take, I want to be able to add instagram like filters to it. I have no idea how to do this so I Google.

### Googling For Filters

- `how do I use instagram's filters on my website`
    - problem: missing javascript
- `how do I use instagram's filters on my website javascript`
    - problem: extraneous words
- `instagram filters javascript`
    - great.

![](https://s3.amazonaws.com/f.cl.ly/items/1X0U3b0Z051M3a333e3R/Image%202015-07-16%20at%206.09.05%20PM.png)

I decide to open all 3 links in new tabs:

![](https://s3.amazonaws.com/f.cl.ly/items/2C240b2d3Y0R381Y1t0d/Image%202015-07-16%20at%206.12.46%20PM.png)

#### From the [first google link](http://techslides.com/instagram-image-filters-with-html5-canvas):

##### Determining Relevancy
I read the first paragraph to find:

![](https://s3.amazonaws.com/f.cl.ly/items/392g3z2R2C1L3U1Z3z15/Image%202015-07-16%20at%206.13.53%20PM.png?t=1437095673260)

> There are many image processing libraries today that could be used to recreate Instagram photo effects in the browser

which confirms that this article is relevant to me.

##### Understanding

A bit lower in the article links to many different resources. I open each one in a new tab to explore it:

![](https://s3.amazonaws.com/f.cl.ly/items/1Y2I1L3U083a3S3B4604/Image%202015-07-16%20at%206.17.06%20PM.png)

I won't go into the details of the next part but from looking at each of these websites, it has made me confident that code exists that will allow me to add filters to my photos.

