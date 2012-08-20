$(function() {
  var shifted = false;
  var zoomed = false;

  var span = $("<span>").addClass("zoomability").insertBefore($("#image-title"));
  span.css({position: 'absolute', left: '8px', top: '16px'});

  var detectZoomability = function() {
    return $(".main-image .image.textbox").hasClass("zoom");
  };

  var setShift = function(shift, evt) {
    if (evt.which == 16) shifted = shift;
  };

  var handleZoom = function() {
    var zoomable = detectZoomability();

    if (zoomable && zoomed) {
      zoomed = false;
      $('.jquery-image-zoom').click();
    } else if (zoomable) {
      zoomed = true;
      $('.main-image a img').click();
    }
  };

  var displayZoomability = function() {
    var zoomability = "&#10007;";
    if (detectZoomability()) zoomability = "&#10003;"
    $(".zoomability").html(zoomability);
  };

  $(document).keydown(setShift.bind(null, true));
  $(document).keyup(setShift.bind(null, false));

  $(document).keydown(function(evt) {
    // changing images always unzooms
    if (evt.which == 37 || evt.which == 39) {
      zoomed = false;
      $(".zoomability").html("");
    }

    // zooming with 'z'
    if (evt.which == 90) { handleZoom() }

    // voting with up and down
    if (shifted && evt.which == 38) {
      $("#mainUpArrow").click();
    } else if (shifted && evt.which == 40) {
      $("#mainDownArrow").click();
    }
  });

  setInterval(displayZoomability, 250);
});
