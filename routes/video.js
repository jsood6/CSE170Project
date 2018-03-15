
var data = require('../data.json')['videos'];
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

exports.videoInfo = function(request, response) { 
	var videoID = request.params.id;
	var video = getVideoData(videoID);
  	response.json(video);
}

exports.view = function(request, response) {
	var videoID = request.params.id;
	var video = getVideoData(videoID);
	response.render('video', video);
}

function getVideoData(videoID) {
	if (videoID == "random") {
		videoID = Math.floor(Math.random() * data.length) + 1;
	} else {
		videoID = parseInt(videoID);
	}
  	var video = data[videoID-1]; // of by one, our first video has index 0
  	return video;	
}