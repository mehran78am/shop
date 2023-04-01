//drop down
const dropDown = document.getElementById("drop-down");
const dropDownMenu = document.getElementById("drop-down-menu");
dropDown.addEventListener("click", function () {
    dropDownMenu.classList.toggle("show");
    console.log("click")
});
window.addEventListener("click", (e) => {
    if (e.target.matches("#product")) {
        return;
    } else {
        if (dropDownMenu.classList.contains("show")) {
            dropDownMenu.classList.remove("show")
        }
    }
})

//slider
let currentIndex = 0;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const showSliders = document.querySelector(".slider");
const dotes = document.querySelectorAll(".dot");
const sliders = document.querySelectorAll(".slide");
let autoChange = setInterval(goNext, 3000);
function changeClass() {
    sliders.forEach((slide) => slide.classList.remove("show"))
    dotes.forEach((dote) => dote.classList.remove("show-dot"))
    sliders[currentIndex].classList.add("show");
    dotes[currentIndex].classList.add("show-dot");
}
function goNext() {
    currentIndex = (currentIndex == sliders.length - 1) ? 0 : currentIndex + 1;
    changeClass();
}
function goPrev() {
    currentIndex = (currentIndex == 0) ? sliders.length - 1 : currentIndex - 1;
    changeClass();
}
next.addEventListener("click", goNext)
prev.addEventListener("click", goPrev)
showSliders.addEventListener("mouseover", () => clearInterval(autoChange))
showSliders.addEventListener("mouseleave", () => autoChange = setInterval(goNext, 3000))
dotes.forEach((dot, index) => {
    dot.addEventListener("click", function () {
        currentIndex = index;
        changeClass()
    })
})