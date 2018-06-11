function getHTML (options, callback) {

  var https = require('https');
  var html = '';
  var result = '';

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      for (var i = 0; i < data.length; i++) {
        html += data[i];
      }
    });

    response.on('end', function() {
      callback(html);
    });

    response.on('error', function(err) {
      console.log(err);
    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

var html = '';
getHTML(requestOptions, printHTML);