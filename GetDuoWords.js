String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};
var x = ""; 
var t = $(".words-skill"); 
for(i = 0; i < t.length; i++) { 
  var e = t[i]; 
  var c = e.innerHTML;
  c = c.replaceAll('<span class="pos"', '<span>></span><span class="pos"');
  c = c.replaceAll('class="word"', 'class="col-1"');
  c = c.replaceAll('class="pos"', 'class="col-1"');
  c = c.replaceAll('ul', 'div');
  c = c.replaceAll('li', 'div');
  x = x + '<div class="row d-block">' + c + '</div></div>'; 
}
x = '<!DOCTYPE html><html dir="ltr"><head><meta charset="UTF-8"><title>Duolingo Tips and Notes</title><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"></head><body class="container">' + x + '</body></html>'
document.open();
document.write(x);
document.close();
