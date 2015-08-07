var Imgur = {};

Imgur.upload = function(file, callback) { // https://hacks.mozilla.org/2011/03/the-shortest-image-uploader-ever/comment-page-1/
 
  // file is from a <input> tag or from Drag'n Drop
  // Is the file an image?
 
  if (!file || !file.type.match(/image.*/)) return;
 
  // It is!
  // Let's build a FormData object
 
  var fd = new FormData();
  fd.append("image", file); // Append the file
  fd.append("key", "6528448c258cff474ca9701c5bab6927");
  // Get your own key: http://api.imgur.com/
 
  // Create the XHR (Cross-Domain XHR FTW!!!)
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://api.imgur.com/2/upload.json"); // Boooom!
  xhr.onload = function() {
    // Big win!
    // The URL of the image is:
    var response = JSON.parse(xhr.responseText);
    var links = response.upload.links;
    var imageUrl = links.original

    callback(imageUrl);
   }
   // Ok, I don't handle the errors. An exercice for the reader.
   // And now, we send the formdata
   xhr.send(fd);
 }