'use strict';
var file;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
  document.getElementById("defaultOpen").click();
  
	/*$('.friend a').click(function(e){
		e.preventDefault();
		$(this).find('h3').text(anagrammedName($(this).find('h3').text()));
	});*/
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
  console.log(window.googleuser);
	//changeUser();
	//getBasicProfile();

}

function findUserID(){

	
}

function changeUser(){
  /*show_login_status('Google', )
  $(".profilePic img").attr("src", profile.getImageUrl());
  console.log(profile.getImageUrl());*/
  /*gapi.load('auth2', function() {
  auth2 = gapi.auth2.init({
    client_id: '699556467015-1ek431j2vanuc3ojrvjr5c78a8gqj212.apps.googleusercontent.com',
    fetch_basic_profile: true,
    scope: 'profile'
  });
  });

 if (auth2.isSignedIn.get()) {
  var profile = auth2.currentUser.get().getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}*/

}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
}

/*$("#cameraFile").on("change", function(event){
  file = event.target.files[0];

});*/

/*function uploadFile(){
  var storageRef = firebase.storage().ref('/looks');
  $("#cameraFile").on("change", function(event){
  file = event.target.files[0]; });
  var filename = file.name;


}*/





