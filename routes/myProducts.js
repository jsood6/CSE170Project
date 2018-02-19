
var data = require('../userProfiles.json');

exports.view = function(req, res){
	
	res.render('myProducts', data);
};