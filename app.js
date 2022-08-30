function hamburgerMenu() {
    var x = document.getElementById("hamburgerMenu");
    var y = document.getElementById("nav-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}