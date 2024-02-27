const images = ["0.png", "1.png","2.png","3.png","4.png","5.png"];
//random image
const randomImg = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");

//setting location using array
bgImg.src = `image/${randomImg}`;
document.body.appendChild(bgImg);