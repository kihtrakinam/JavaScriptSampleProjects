// initialize count value
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const classes = e.currentTarget.classList;
        if (classes.contains("decrease")){
            count--;
        } else if (classes.contains("increase")){
            count++;
        } else if (classes.contains("reset")){
            count = 0;
        }
        if (count > 0){
            value.style.color = 'green';
        } else if (count < 0){
            value.style.color = 'red';
        } else if (count === 0) {
            value.style.color = 'black';
        }
        value.textContent = count;
    })
});
// e is the event object.. event object has an attribute currentTarget from which we can get the class value