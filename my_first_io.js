var fs = require('fs');
files(fs.readFileSync(process.argv[2], 'utf8'));

function files (text) {
  var arr = text.toString().split('\n').length - 1
  console.log(arr);
}