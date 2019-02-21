var fs = require('fs');
var path = require('path');

module.exports = (directory, extension, callback) => {
	var arr = '.' + extension;

    fs.readdir(directory, (err, data) => {    	
        if (err) 
            return callback(err);
        
            data = data.filter((file) => {
                return path.extname(file) === arr;
            })
            callback(null, data);
    });
};