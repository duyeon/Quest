var arr = new Array();
process.argv.forEach(
	function(val,array) {
 	arr = val;
}
);
if(arr[0] === '1'){
	var config = require('./config1');
		config.show();

	}

else if(arr[0] === '2'){
	var config = require('./config2');
		config.show();

	}
