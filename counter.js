const myText = document.getElementById("myText");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");


let counter = 0;

increaseBtn.addEventListener('click', () => {
    myText.innerHTML = counter += 1;
})
decreaseBtn.addEventListener('click', () => {
    myText.innerHTML = counter -= 1;
})
resetBtn.addEventListener('click', () => {
    myText.innerHTML = counter = 0;
})
