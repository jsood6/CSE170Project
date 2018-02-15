/*var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var newFriend = {
		"name" : req.query.name,
		"description" : req.query.description,
		"imageURL" : 'http://lorempixel.com/400/400/people'

	};

	console.log();
	data.friends.push(newFriend);

	res.render('index', data);

 }; */
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('loginPage');
};