'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
  //$('#signOutBtn').show();
  
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
  /*$("#searchbar").hide();
  $("#searchBtn").click(function(){
     $("#searchbar").show();
    $("#searchbar").css("width","50%");
    console.log("????????????//");

  });*/
  
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    
}


// Close the dropdown menu if the user clicks outside of it


/*function signOut() {
  //var auth2 = gapi.auth2.getAuthInstance();
  //console.log(auth2);
  //alert("yo");
 /* auth2.signOut().then(function () {
    console.log('User signed out.');
          
  });
 
  userSignedIn = false;
  //window.location.href = "https://a7-beauti.herokuapp.com";
  $('#signOutBtn').hide();
  //$('#nextPageLoginBtn').hide();*/

      
//}

/*function hideSignOutBtn(){
  ('#signOutBtn').hide();
}*/

