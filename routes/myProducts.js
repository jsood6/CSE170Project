
//var data = require('../userProfiles.json');
var productsData = require('../products.json');

exports.view = function(req, res){
	
	res.render('myProducts', productsData);
}; 

exports.viewAlt = function(request, response){
	
	response.render('myProducts', productsData);
}