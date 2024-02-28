const backgrd = document.querySelector("body");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const nav = document.querySelector(".navbar");
const option = document.querySelectorAll(".option");

img1.addEventListener("mouseover", () => {
    backgrd.classList.remove("back");
    backgrd.classList.add("background");
    nav.style.backgroundColor = "rgba(16,16,16,0.3)";
    
});

img1.addEventListener("mouseleave", () => {
      
       backgrd.classList.add("back");
       backgrd.classList.remove("background");
       nav.style.backgroundColor = "#03045e";
});

img2.addEventListener("mouseover", () => {
    backgrd.classList.remove("back");
    backgrd.classList.add("background2");
    nav.style.backgroundColor = "rgba(16,16,16,0.3)";
});

img2.addEventListener("mouseleave", () => {
      
       backgrd.classList.add("back");
       backgrd.classList.remove("background2");
       nav.style.backgroundColor = "#03045e";
});