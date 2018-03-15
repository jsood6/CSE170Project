'use strict';
provider.addScope('https://www.googleapis.com/auth/userinfo.profile');



// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	
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
}

// Get the modal
var modalVideo = document.getElementById('myModalVideo');

// Get the button that opens the modal
var btnVideo = document.getElementById("videoPageCamera");


// Get the <span> element that closes the modal
var spanVideo = document.getElementsByClassName("closeVideo")[0];


// When the user clicks on the button, open the modal 
btnVideo.onclick = function() {
    modalVideo.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
spanVideo.onclick = function() {
    modalVideo.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalVideo) {
        modalVideo.style.display = "none";
    }
}




