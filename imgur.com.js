var makeItSnappy = function() {
  jQuery('div.advertisement').remove();
  jQuery('#zzsliderlayer_box').remove();
};

jQuery(document).on('keyup', makeItSnappy);
makeItSnappy();

setInterval(makeItSnappy, 100);
