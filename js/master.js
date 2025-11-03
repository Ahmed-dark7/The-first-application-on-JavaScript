let landingPage = document.querySelector(".landing-page");
let imgsArray = ["1.jpg","2.jfif","3.jpg","4.jpg","5.jpeg"];
setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
},10000);