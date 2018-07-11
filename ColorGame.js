var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode"); 

init();
resetButton.addEventListener("click", function() {
	reset();
});

function init() {
	setupSquares();
	setupModeButtons();
	reset();
}

function setupModeButtons() {
	for (var i = 0 ; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

// easyButton.addEventListener("click", function(){
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor.toUpperCase();
// 	h1.style.backgroundColor = "steelblue";
// 	messageDisplay.textContent = "";
// 	for(var i = 0 ; i < squares.length ; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardButton.addEventListener("click", function(){
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	hard.classList.add("selected");
// 	easy.classList.remove("selected");
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor.toUpperCase();
// 	h1.style.backgroundColor = "steelblue";
// 	messageDisplay.textContent = "";
// 	for(var i = 0 ; i < squares.length ; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 		}
// });

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			var colorClicked = this.style.backgroundColor;
			if (colorClicked === pickedColor) {
				messageDisplay.textContent = "Correct!";
				h1.style.backgroundColor = pickedColor;
				changeColors(pickedColor);
				resetButton.textContent = "Play Again?"
			} else {
				messageDisplay.textContent = "Try Again!";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}


function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
 	resetButton.textContent = "New Colors";
 	messageDisplay.textContent = "";
 	for (var i = 0; i < squares.length; i++) {
 		if (colors[i]) {
 			squares[i].style.display = "block";
 			squares[i].style.backgroundColor = colors[i];
 		} else {
 			squares[i].style.display = "none";
 		} 		
 	}
}

// resetButton.addEventListener("click", function(){
// 	//change 6 new colors
// 	colors = generateRandomColors(numSquares);
// 	//pick a new selected color
// 	pickedColor = pickColor();
// 	//change color display
// 	colorDisplay.textContent = pickedColor.toUpperCase();
// 	//change colors of squares
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 	}
// 	//change h1 background color
// 	h1.style.backgroundColor = "steelblue";
// 	resetButton.textContent = "New Colors";
// 	messageDisplay.textContent = "";
// });


function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to the array
	for (var i = 0; i < num; i++) {
		//get random colors and push into the array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}