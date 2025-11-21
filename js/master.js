//check if there's local storage color option
let mainColors = localStorage.getItem("colors_option");
if(localStorage !== null){
  document.documentElement.style.setProperty("--main-color", mainColors);
}
//settings box
let box = document.querySelector(".settings-box");
let boxIcon = document.querySelector(
  ".settings-box .icon-container .settings-icon"
);
boxIcon.onclick = function () {
  this.classList.toggle("fa-spin");
  box.classList.toggle("open");
};
//switch colors
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach( li => {
  li.addEventListener("click", (e) => {
    //set color on root
    document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
    //set color on local storage
    localStorage.setItem("colors_option", e.target.dataset.color);
    //remove acive class from all childrens
    e.target.parentElement.querySelectorAll(".active").forEach(li => {
      li.classList.remove("active");
    });
    //add active class on self
    e.target.classList.add("active");
  })
});
//change landing page background
let landingPage = document.querySelector(".landing-page");
let imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
setInterval(() => {
  let randomNumber = Math.floor(Math.random() * imgsArray.length);
  landingPage.style.backgroundImage =
    'url("images/' + imgsArray[randomNumber] + '")';
}, 10000);