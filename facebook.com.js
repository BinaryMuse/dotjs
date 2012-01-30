removeFbPhotoLike = function() {
  $("#fbPhotoPageButtons").hide();
  $("#fbPhotoSnowboxButtons").hide();
};

jQuery(function() {
  $("a").click(function() {
    setTimeout(removeFbPhotoLike, 3000);
  });
  removeFbPhotoLike();
});
