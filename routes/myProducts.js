
//var data = require('../userProfiles.json');
var productsData = require('../products.json');
var looksData = require('../looks.json');
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

exports.view = function(req, res){
	
	//res.render('myProducts', productsData);
	res.render('myProducts', {productsData, looksData});
};