var myModule = require('./mymodule');
var directory = process.argv[2];
var extension = process.argv[3];

myModule(directory, extension, (err, data) => {
  	if (err){
    	return console.error(err);
  	}
 
 	data.forEach((file) => {
    	console.log(file);
  });
});