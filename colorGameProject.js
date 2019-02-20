var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var pickedColor = pickColor();
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var wrong = document.getElementById("wrong");
var extremeButton = document.getElementById("extremeButton");
var wrongScore = 0
colorDisplay.textContent = pickedColor;



easyBtn.addEventListener("click", function () {
    wrongScore = 0
    wrong.innerHTML = wrongScore;
    h1.style.backgroundColor = "steelblue";
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none"
        }
    }


})

hardBtn.addEventListener("click", function () {
    wrongScore = 0
    wrong.innerHTML = wrongScore;
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        h1.style.backgroundColor = "steelblue";
        squares[i].style.display = "block"

    }

})

resetButton.addEventListener("click", function () {
    wrongScore = 0
    wrong.innerHTML = wrongScore;
    messageDisplay.textContent = ""
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        h1.style.backgroundColor = "steelblue";
        squares[i].style.display = "block";

    }
});

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again";

        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
            wrongScore++
            wrong.innerHTML = wrongScore;
        }
    }
    );
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;


    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];


}

function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor(6));

    }

    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}



