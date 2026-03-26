window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(0,0,0,0.8)";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});
