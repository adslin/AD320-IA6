require('http').get(process.argv[2], response)

	function response (res) {
  		res.setEncoding('utf8');
  		res.on('data', console.log);
  		res.on('err', console.error);
	};