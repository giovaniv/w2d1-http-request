
var https = require('https');
var result = '';

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      for (var i = 0; i < data.length; i++) {
        result += data[i];
      }
    });

    response.on('end', function() {
      console.log(result);
    });

    response.on('error', function(err) {
      console.log(err);
    });

  });

}

getAndPrintHTML();
