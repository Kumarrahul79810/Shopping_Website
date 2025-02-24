const bars = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-xmark");
const nav = document.querySelector(".nav");

bars.addEventListener("click", () => {
  nav.style.display = "flex";
  close.style.display = "flex";
});

close.addEventListener("click", () => {
  nav.style.display = "none";
});

const viewbtn = document.querySelector(".view-more-btn");
const viewmore = document.querySelector(".view-more");

viewbtn.addEventListener("click", () => {
  viewmore.classList.toggle = "view-more";
});

// -----------------product detail img change on click---
const smallimg = document.querySelectorAll(".small-img");
const prodimg = document.querySelector("#product-img");

smallimg[0].onclick = () => {
  prodimg.src = smallimg[0].src;
};
smallimg[1].onclick = () => {
  prodimg.src = smallimg[1].src;
};
smallimg[2].onclick = () => {
  prodimg.src = smallimg[2].src;
};
smallimg[3].onclick = () => {
  prodimg.src = smallimg[3].src;
};

gsap.to("#mainlogo",{
    duration:1,
    y:30,
    delay:1,
    duration:2,
    color:"red",
})
