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

// left and right arrows to go back and forward
function go(dir) {
  var l = $("a[rel=" + dir + "]");
  l[0].click();
}

$(document).on('keyup', function(evt) {
  if(evt.which == 37) go("prev");
  else if (evt.which == 39) go("next");
});
