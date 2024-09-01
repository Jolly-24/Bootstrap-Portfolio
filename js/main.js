let all = document.getElementById("all");
let brand = document.getElementById("brand");
let design = document.getElementById("design");
let graphic = document.getElementById("graphic");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");
let image5 = document.getElementById("image5");
let image6 = document.getElementById("image6");

function filterbrand(){
    brand.classList.add("active");
    all.classList.remove("active");
    design.classList.remove("active");
    graphic.classList.remove("active");
    image1.style.display = "none";
    image3.style.display = "none";
    image2.style.display = "none";
    image5.style.display = "none";
    image4.style.display = "flex";
    image6.style.display = "flex";
}
function filterall(){
    brand.classList.remove("active");
    all.classList.add("active");
    design.classList.remove("active");
    graphic.classList.remove("active");
    image1.style.display = "flex";
    image3.style.display = "flex";
    image2.style.display = "flex";
    image5.style.display = "flex";
    image4.style.display = "flex";
    image6.style.display = "flex";
}
function filterdesign(){
    brand.classList.remove("active");
    all.classList.remove("active");
    design.classList.add("active");
    graphic.classList.remove("active");
    image1.style.display = "none";
    image3.style.display = "none";
    image4.style.display = "none";
    image6.style.display = "none";
    image2.style.display = "flex";
    image5.style.display = "flex";
}
function filtergraphic(){
    brand.classList.remove("active");
    all.classList.remove("active");
    design.classList.remove("active");
    graphic.classList.add("active");
    image1.style.display = "flex";
    image3.style.display = "flex";
    image4.style.display = "none";
    image6.style.display = "none";
    image2.style.display = "none"; 
    image5.style.display = "flex";
}


function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll < 700) {
        navbar.classList.remove('BgColour');
        // navlink.classList.add('color-link');
    } else {
        navbar.classList.add('BgColour');
        // navlink.classList.remove('color-link');
    }
}

window.addEventListener('scroll', scrollValue);


// Function to change the nav-link and navbar-brand colors based on scroll position
function changeNavColors() {
    // Get the current scroll position
    let scrollPosition = window.scrollY;

    // Get all nav links and the navbar-brand
    let navLinks = document.querySelectorAll('.nav-link');
    let navbarBrand = document.querySelector('.navbar-brand');

    // Check if the scroll position is more than 700 pixels
    if (scrollPosition > 700) {
        // Change nav-link and navbar-brand color to black
        navLinks.forEach(function(link) {
            link.style.color = 'black';
        });
        navbarBrand.style.color = 'black';
    } else {
        // Change nav-link and navbar-brand color to white
        navLinks.forEach(function(link) {
            link.style.color = 'white';
        });
        navbarBrand.style.color = 'white';
    }
}

// Add an event listener for the scroll event
window.addEventListener('scroll', changeNavColors);

