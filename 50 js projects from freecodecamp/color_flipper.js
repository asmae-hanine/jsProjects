// In this project im gonna make a code to change the color of the background
// when you click a button the color is gonna change and the text too


const colors = ['#BA7BA1', '#8AF3FF', '#109648', '#E01A4F', '#53B3CB']
const myButton = document.getElementById("myButton");
const myText = document.getElementById("myText");

myButton.addEventListener('click', changeColor);

function getRandomColor() {
    const randomColor = Math.floor(Math.random() * colors.length);

    return colors[randomColor];
}

function changeColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    myText.innerHTML = "The background color is :" + randomColor;

}


