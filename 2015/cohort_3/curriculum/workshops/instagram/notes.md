# Notes

Instagram

When I Do X
- click the submit button
- when I press enter
- when I hover over a picture
Based On These Settings
- settings that you click(filters)
Do this
- append an image
- append a description
- change an attributes

# Validate I Can Do Everything First

I want to validate that I can build my rocketship first

- Can I take a picture?
    - Google "javascript camera"
        - https://developer.mozilla.org/en-US/docs/Web/Guide/API/Camera
    - Isolate Example
        - http://jsbin.com/joveyafiqu/edit?html,css,js

- Can I do filters?
    - Google "javascript instagram filters"
    - First 3 Links Open In New Tab
        - http://techslides.com/instagram-image-filters-with-html5-canvas

# Sketch What My App Might Look Like

I want to design my rocketship first
[INSERT SKETCH HERE]

- I look at the Instagram app to see
    - what it looks like
    - what the flow is. It looks like the following

Decide on
- Click on photo button
- Then I would take the photo on the mobile phone
    - Instead of taking a photo, I want to use an existing photo
        - So I can have a text box they can enter it into
            - I can just have a dialog box popup and as for it
                - skip, I can use the same photo for every time
- Then I would filter it
    - I can use one of those JQuery APIs
        - Skip
- Then I would ask for a description
    - I can ask using an input box
        - I can ask using a text box
            - skip this feature

- Then I would post to FB / Twitter (I can make it so that it sends a text message on fukcing Maestro!!!)
    - I can use the facebook API
        - I can post via Maestro
            - skip

- Add the picture to my feed
    - make the feed such that only I can see it
        - only just add the image

# Now I want to design my MVP I first
- When I click on a button
- It adds the photo to the screen

So I could google
- "when I click a button add a photo to the screen".

But first I must ask how I might break down the problem into a smaller problem:
- "do something when I click on a button"
- "detect button click"
- "javascript detect button click"

## When I click on a button
- "javascript detect button click"
    - http://stackoverflow.com/questions/2788191/how-to-check-whether-a-button-is-clicked-by-using-javascript
    - isolate example
        + (already isolated for us)
        + http://jsfiddle.net/6qDap/1/
    + copy example into my code
    - try running it, it does not work
        + I open my console
        + http://cl.ly/image/0H351b1d0v2c
    - 0_alert_when_clicked_BROKEN
    + Uncaught TypeError: Cannot set property 'onclick' of null
        * Read first 3 links
            * 1
                - This makes sense, but not really sure what to do with it
                    `
                        window.onload = function(){ 
                            // your code 
                        };
                    `
            * 2, Oh i am beginnign to understand
                - http://stackoverflow.com/questions/17080502/uncaught-typeerror-cannot-set-property-onclick-of-null
            * 3
    - add 1_alert_when_clicked_fixed
    - Yay it works now!

## Adding an image with javascript
"put an image on the screen"
"add an image to the screen"
"add an image"
"javascript add image"

- http://stackoverflow.com/questions/2735881/adding-images-to-the-html-with-javascript
    var img = document.createElement("img");
    img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";

    var src = document.getElementById("header");
    src.appendChild(img);

- no checkmark or upvotes so ignore
    http://stackoverflow.com/questions/27137584/javascript-add-images

- http://www.w3schools.com/jsref/dom_obj_image.asp



## Ask for an existing photo
- "ask me for a link of an existing photo"
- "ask user for link of existing photo"
- "ask user for text"
- "javascript ask user for text"

google
- 1
    - http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt


