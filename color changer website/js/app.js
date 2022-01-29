let colors = ['blue', 'green', 'pink', 'orange', 'yellow', 'red', 'white'];

let button = document.getElementById('button');

button.addEventListener('click', function(){

    var randomColor = colors[Math.floor(Math.random() * colors.length)]

    let backgroundChanger = document.getElementById('backgroundChanger');

    backgroundChanger.style.background = randomColor;
})