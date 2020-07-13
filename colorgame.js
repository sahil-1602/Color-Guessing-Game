var numSquares = 6;
var color =[];
var pickedColor;

var squares = document.querySelectorAll(".squares");
var colorChoosen = document.querySelector("#colorChoosen");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var playAgainButton = document.querySelector("#playagain");
var easyButton = document.querySelector("#easybtn");
var hardButton = document.querySelector("#hardbtn");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i=0; i<modeButton.length; i++){
        modeButton[i].addEventListener("click", function() {
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function reset(){
    message.textContent = "";
    h1.style.backgroundColor = "steelblue";
    playAgainButton.textContent="New Colors";
    color = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorChoosen.textContent = pickedColor.toUpperCase();

    for(var i=0; i<squares.length; i++){
        if(color[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor=color[i];
        }else{
            squares[i].style.display = "none";
        }
    }
}


playAgainButton.addEventListener("click", function(){
    reset();
});

function setupSquares(){

    for(var i = 0; i < squares.length; i++){

        squares[i].style.backgroundColor = color[i];

        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                message.textContent = "Correct!";
                playAgainButton.textContent="Play Again";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }else{
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again!";
            }
        });
    }
}

function changeColors(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * color.length);
    return color[random];

}

function generateRandomColors(num){

    var a = [];

    for(var i=0; i<num; i++){
        a.push(randomColor());
    }

    return a;

}

function randomColor(){

    r = Math.floor(Math.random() * 256);

    g = Math.floor(Math.random() * 256);

    b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}