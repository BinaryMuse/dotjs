if (document.location.protocol === "http:") {
  document.location.href = document.location.href.replace('http', 'https');
}