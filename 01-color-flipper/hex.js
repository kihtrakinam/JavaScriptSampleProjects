const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomColor(){
    let newColor = "";
    for (let i=0; i<6; i++){
        const randomNumber = Math.floor(Math.random() * hex.length);
        const newValue = hex[randomNumber];
        newColor += newValue;
    }
    return newColor
}

function changeBGColor(){
    const newColor = "#" + getRandomColor()
    document.body.style.backgroundColor = newColor
    color.textContent = newColor
};

btn.addEventListener("click",changeBGColor);