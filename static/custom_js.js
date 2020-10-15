function myFunction() {
    var x = document.getElementById("myDIV");
    console.log('here');
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }