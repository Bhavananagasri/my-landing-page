const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});