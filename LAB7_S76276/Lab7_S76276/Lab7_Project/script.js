/* ===== Automatic Slideshow ===== */
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

/* ===== Progress Bar ===== */
let progress = 0;
let bar = document.getElementById("progressBar");

let interval = setInterval(() => {
    if (progress >= 100) {
        clearInterval(interval);
    } else {
        progress += 1;
        bar.style.width = progress + "%";
    }
}, 50);

/* ===== Collapsible Section ===== */
let btn = document.querySelector(".collapsible");
let content = document.querySelector(".collapsible-content");

btn.addEventListener("click", () => {
    content.style.display =
        content.style.display === "block" ? "none" : "block";
});
