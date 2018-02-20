'use strict';

var userSignedIn;

var userID;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	
	
	/*$('#loginBtn').click(function(e){
		e.preventDefault();
		$(this).find('h3').text(anagrammedName($(this).find('h3').text()));
	});*/
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	/*if(userSignedIn === false){
		$('#signOutBtn').hide();
	}
	else{
		$('#signOutBtn').show();
	}*/
}

/*function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
	var profile = googleUser.getBasicProfile();
	console.log("ID: " + profile.getId()); // Don't send this directly to your server!
	        
	console.log('Full Name: ' + profile.getName());
	console.log('Given Name: ' + profile.getGivenName());
	console.log('Family Name: ' + profile.getFamilyName());
	console.log("Image URL: " + profile.getImageUrl());
	console.log("Email: " + profile.getEmail());

	// The ID token you need to pass to your backend:
	var id_token = googleUser.getAuthResponse().id_token;
	console.log("ID Token: " + id_token);
	userSignedIn = true;

}


function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();

	auth2.signOut().then(function () {
		console.log('User signed out.');
		      
	});

	userSignedIn = false;
	    
}*/





