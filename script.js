let slideIndices = [1, 1]; // For tracking slides for each slideshow (slideshow1, slideshow2)
let directions = [1, 1]; // Tracks the direction for each slideshow




// Initialize the slideshows
showSlides(1, 1);
showSlides(1, 2);

// Next/previous controls
function plusSlides(n, no) {
    directions[no - 1] = n;
    showSlides(slideIndices[no - 1] += n, no);
}

// Thumbnail image controls
function currentSlide(n, no) {
    directions[no - 1] = n > slideIndices[no - 1] ? 1 : -1; // determine direction based on new slide
    showSlides(slideIndices[no - 1] = n, no);
}

function showSlides(n, no) {
    let i;
    let slideshowContainer = document.getElementById(`slideshow${no}`);
    let slides = slideshowContainer.getElementsByClassName("mySlides");
    let dots = slideshowContainer.getElementsByClassName("dot");

    if (n > slides.length) { slideIndices[no - 1] = 1; }
    if (n < 1) { slideIndices[no - 1] = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("slide-left", "slide-right");
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Add appropriate sliding class based on direction
    if (directions[no - 1] === 1) {
        slides[slideIndices[no - 1] - 1].classList.add("slide-right");
    } else {
        slides[slideIndices[no - 1] - 1].classList.add("slide-left");
    }

    slides[slideIndices[no - 1] - 1].style.display = "block";
    dots[slideIndices[no - 1] - 1].className += " active";
}


let logo = document.querySelector(".logo");

let headerMenu = document.querySelector(".menu");

var headerNav = document.querySelector("nav");

headerMenu.addEventListener("click", toggleNav);
function toggleNav() {
    headerNav.classList.toggle("closeNav");
}

var navLinks = document.querySelectorAll("li");

navLinks.forEach((navLink) =>
    navLink.addEventListener("click", handleNavlinkAction)
);

function handleNavlinkAction() {
headerNav.classList.add("closeNav");
}

console.log(navLinks);


function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Hide the form section
    document.getElementById('form-container').style.display = 'none';

    // Show the success section
    document.getElementById('model').style.display = 'block';
}