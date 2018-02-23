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

var data = require("../userProfiles.json");

exports.view = function(req, res){
  res.render('loginPage');
}; 

exports.addUser = function(req,res){
	var newFriend = {
		"userName": googleuser.getName(),
		"userID": googleuser.getID(),
		"profilePhotoURL": googleuser.getImageUrl()

	};

	console.log();
	data.userProfiles.push(newFriend);
}


/*exports.addUser= function(req, res) {    
	// Your code goes here
	var newUser = {
		"userName": ,
		"userID": "106178857333391880403",
		"profilePhotoURL":
		
		"name" : req.query.name,
		"description" : req.query.description,
		"imageURL" : 'http://lorempixel.com/400/400/people'

	};

	console.log();
	data.friends.push(newFriend);

	res.render('index', data);

 };*/