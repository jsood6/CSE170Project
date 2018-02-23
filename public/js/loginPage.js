'use strict';

var userSignedIn;

var userID;

var googleuser;


// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$('#signOutBtn').hide();
	$('#nextPageLoginBtn').hide();
	
	
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	
}



function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
	var profile = googleUser.getBasicProfile();
	console.log("ID: " + profile.getId()); // Don't send this directly to your server!
	googleuser = googleUser.getBasicProfile();
	console.log(googleUser);
	        
	console.log('Full Name: ' + profile.getName());
	console.log('Given Name: ' + profile.getGivenName());
	console.log('Family Name: ' + profile.getFamilyName());
	console.log("Image URL: " + profile.getImageUrl());
	console.log("Email: " + profile.getEmail());
	// The ID token you need to pass to your backend:
	var id_token = googleUser.getAuthResponse().id_token;
	console.log("ID Token: " + id_token);

	userSignedIn = true;
	$('#signOutBtn').show();
	$('#nextPageLoginBtn').show();

}


function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	console.log(auth2);

	auth2.signOut().then(function () {
		console.log('User signed out.');
		      
	});

	userSignedIn = false;
	$('#signOutBtn').hide();
	$('#nextPageLoginBtn').hide();

	    
}





