var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;
var velocityX = 0;
var velocityY = 0;
var currentDirection;
var snakeBody = [];

var foodX;
var foodY;

var gameOver = false;

window.onload = function(){
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d");

    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000/10);
}

function update(){
    if(gameOver == true){
        return;
    }

    if(currentDirection == 0){
        velocityX = 0;
        velocityY = -1;
    }
    if(currentDirection == 1){
        velocityX = 0;
        velocityY = 1;
    }
    if(currentDirection == 2){
        velocityX = 1;
        velocityY = 0;
    }
    if(currentDirection == 3){
        velocityX = -1;
        velocityY = 0;
    }

    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);
    
    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if(snakeX == foodX && snakeY == foodY){
        snakeBody.push([foodX, foodY])
        placeFood();
    }

    for(let i = snakeBody.length - 1; i > 0; i--){
        snakeBody[i] = snakeBody[i-1];
    }
    if(snakeBody.length){
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle="lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for(let i = 0; i < snakeBody.length; i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    if(snakeX < 0 || snakeX > cols * blockSize -1 || snakeY < 0 || snakeY > rows * blockSize - 1){
        gameOver = true;
    }

    for(let i = 0; i < snakeBody.length; i++){
        if(snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
            gameOver = true;
        }
    }
}

function changeDirection(e){
    if(e.code == "ArrowUp" && velocityY != 1 || e.key === "w" && velocityY != 1){
        currentDirection = 0;
    }
    else if(e.code == "ArrowDown" && velocityY != -1 || e.key === "s" && velocityY != -1){
        currentDirection = 1;
    }
    else if(e.code == "ArrowRight" && velocityX != -1 || e.key === "d" && velocityX != -1){
        currentDirection = 2;
    }
    else if(e.code == "ArrowLeft" && velocityX != 1 || e.key === "a" && velocityX != 1){
        currentDirection = 3;
    }
}

function placeFood(){
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}