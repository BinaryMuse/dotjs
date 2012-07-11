// xkcd title text under the image
var image     = $("#comic img[title]");
console.log(image);
var paragraph = $("<p>" + image.attr('title') + "</p>");
image.attr('title', '');
paragraph.css({"font-variant": "normal",
               "border": "1px solid yellow",
               "padding": "1em",
               "background-color": "#ffc"});
image.parents('#comic').after(paragraph);
