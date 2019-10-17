$(document).ready(function() {
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });
});

// Test: Popup msg when user hovers over Project 1
var project = document.querySelector("#project1");

project.addEventListener("mouseenter", mouseEnterContainer);

function mouseEnterContainer() {
  alert("I've been triggered!");
}

// TBD: Write function for the back-to-top smooth scroll
