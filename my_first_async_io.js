var fs = require('fs');

fs.readFile(process.argv[2], (error, result) => {
	  if (error) {
	    return console.log(error);
	  }
	  var str = result.toString().split('\n').length - 1;
      console.log(str);
	});