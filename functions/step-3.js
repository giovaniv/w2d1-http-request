function getAndPrintHTML (options) {

  var https = require('https');
  var result = '';

  https.get(options, function(response) {

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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);