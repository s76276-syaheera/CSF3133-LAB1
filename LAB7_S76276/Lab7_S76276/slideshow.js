let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // move to next slide
    slideIndex++;

    // reset if exceed
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // show current slide
    slides[slideIndex - 1].style.display = "block";

    // repeat every 3 seconds
    setTimeout(showSlides, 3000);
}

// start slideshow
showSlides();
