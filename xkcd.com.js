// xkcd title text under the image
var image     = $("div#contentContainer img[title]");
var paragraph = $("<p>" + image.attr('title') + "</p>");
image.attr('title', '');
paragraph.css({"font-variant": "normal",
               "border": "1px solid yellow",
               "padding": "1em",
               "background-color": "#ffc"});
image.after(paragraph);
