http = require('http');
var result = '';

http.get(process.argv[2], (res) => {
    res.setEncoding('utf8');
    res.on('data', (input) => {
        result += input.toString();
    });
    res.on('error', console.error);
    res.on('end', () => {
      	console.log(result.length);
      	console.log(result);
    });
});