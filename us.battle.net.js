$(function() {
  var signature   = "\n________________________________________________\n" +
    "MVP, Web and API\n" +
    "Libraries for the Community Platform API: http://us.battle.net/wow/en/forum/topic/2369882588";
  var textarea    = $("textarea.post-editor");
  var currentText = textarea.val();
  if (currentText.indexOf(signature) == -1) {
    textarea.val(currentText + signature);
  }
});
