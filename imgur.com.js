$(function() {
  var shifted = false;

  $(document).keydown(function(evt) {
    if (evt.which == 16) { shifted = true; }
  });

  $(document).keyup(function(evt) {
    if (evt.which == 16) { shifted = false; }
  });

  $(document).keydown(function(evt) {
    if (shifted && evt.which == 38) { // up
      $("#mainUpArrow").click();
    } else if (shifted && evt.which == 40) { // down
      $("#mainDownArrow").click();
    }
  });
});
