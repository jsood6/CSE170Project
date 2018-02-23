
//var data = require('../userProfiles.json');
var productsData = require('../data.json');

exports.view = function(req, res){
	
	res.render('myProducts', productsData);
}; 