var http = require('http');
var server = http.createServer(function(request, response) {
  response.end('Hello World');
  
  console.log('do something now');
  
  setTimeout(function() { async('later'); }, 3000);
  
  function async(arg) {
    console.log('do something '+arg);
  }
});
