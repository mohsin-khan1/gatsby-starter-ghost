$( ".w-nav-button" ).click(function() {
    alert( "Handler for .click() called." );
    var x = document.getElementById("w-nav-overlay-0");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });