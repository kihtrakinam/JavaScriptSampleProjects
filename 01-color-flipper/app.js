const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function changeBGColor(){
    const randomNumber = Math.floor(Math.random() * colors.length);
    const newColor = colors[randomNumber]
    document.body.style.backgroundColor = newColor
    color.textContent = newColor
};

btn.addEventListener("click",changeBGColor);