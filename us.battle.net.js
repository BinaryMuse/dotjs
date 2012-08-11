$(function() {
  var signature   = "\n________________________________________________\n" +
    "MVP, Web and API\n" +
    "Libraries for the Community Platform API: http://us.battle.net/wow/en/forum/topic/2369882588\n" +
    "Libraries for the Community Platform API: http://us.battle.net/d3/en/forum/topic/6307731317";
  var textarea    = $("textarea.post-editor");
  var currentText = textarea.val();
  if (currentText.indexOf(signature) == -1) {
    textarea.val(currentText + signature);
  }
});
