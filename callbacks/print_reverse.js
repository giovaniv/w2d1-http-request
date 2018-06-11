
var getHTML = require('../functions/http-functions');

function printReverse (html) {

  var array = [];

  for (var i = html.length - 1; i >= 0; i--) {
    array.push(html[i]);
  }
  console.log(array.join(''));

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

var html = '';
getHTML(requestOptions, printReverse);