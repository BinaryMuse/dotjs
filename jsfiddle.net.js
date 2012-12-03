$(function() {
  var evalInPage = function(func) {
    //location.href = 'javascript:void((' + func + ')());';
    var form = document.createElement('form');
    form.action = 'javascript:void((' + Function.prototype.toString.call(func) + ')());';
    document.body.appendChild(form);
    form.submit();
    form.parentNode.removeChild(form);
  }

  setTimeout(function() {
    evalInPage(function() {
      ['html', 'css', 'js'].forEach(function(type) {
        try {
          document.querySelector('iframe.' + type).CodeMirror.setIndentUnit(2);
        } catch (e) {}
      });
    });
  }, 1500);
});
