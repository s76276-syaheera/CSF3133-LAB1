document.addEventListener("DOMContentLoaded", function() {
    const collapsiblebutton = document.querySelector(".collapsible");
    const content = document.querySelector(".content");
    collapsiblebutton.addEventListener("click", function() {
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});