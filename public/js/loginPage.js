'use strict';
var provider = new firebase.auth.GoogleAuthProvider();

var userSignedIn;

var userID;

var googleuser;

var config = {
	    apiKey: "AIzaSyD5j9eVne2AowwZeSZLYsl_04Lg_FkECa0",
	    authDomain: "cse170-makeup-ap-1518681818974.firebaseapp.com",
	    databaseURL: "https://cse170-makeup-ap-1518681818974.firebaseio.com",
	    projectId: "cse170-makeup-ap-1518681818974",
	    storageBucket: "cse170-makeup-ap-1518681818974.appspot.com",
	    messagingSenderId: "699556467015"
	  };

firebase.initializeApp(config);


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

/*function onSignIn(){
	
	firebase.auth().signInWithPopup(provider).then(function(result){
		var token = result.credential.accessToken;
		var user = result.user;
		console.log(user.displayName);

	});
	$('#signOutBtn').show();
	$('#nextPageLoginBtn').show();
}*/

function onSignIn(googleUser) {
  console.log('Google Auth Response', googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
    unsubscribe();
    console.log(googleUser.getBasicProfile());
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.getAuthResponse().id_token);
      // Sign in with credential from the Google user.
      firebase.auth().signInWithCredential(credential).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    } else {
      console.log('User already signed-in Firebase.');
    }
  });
  $('#signOutBtn').show();
	$('#nextPageLoginBtn').show();
}

function isUserEqual(googleUser, firebaseUser) {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var helpBtn = document.getElementById("helpBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var helpBtn = document.getElementById("helpBtn");

helpBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/*function onSignIn(googleUser) {
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
	//window.location.href = "/index";
	$('#signOutBtn').show();
	$('#nextPageLoginBtn').show();
	//$('#loginBtn').hide();

}*/

/*function onSignIn(googleUser) {
  console.log('Google Auth Response', googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.getAuthResponse().id_token);
      // Sign in with credential from the Google user.
      firebase.auth().signInWithCredential(credential).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    } else {
      console.log('User already signed-in Firebase.');
    }
  });
}*/

function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	console.log(auth2);

	auth2.signOut().then(function () {
		console.log('User signed out.');
		      
	});

	userSignedIn = false;
	$('#signOutBtn').hide();
	$('#nextPageLoginBtn').hide();
	//$('#loginBtn').show();

	    
}





