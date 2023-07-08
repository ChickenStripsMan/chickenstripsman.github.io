const logo = document.getElementById('csmImage');
const colors = ['yellow', 'green', 'red', 'blue', 'purple'];
var position = logo.getBoundingClientRect();
var velocity = [1, 1];
var destination = [1, 1];

//main function
function moveAndBorder(){
    //change this to a while loop so it runs forever, before though you need to figure out how to set an update rate (set a frame rate of 60)
    for(let i = 3; i > 0; i--){
        position = logo.getBoundingClientRect();
        rng();
        borderCheck();
        velocityConverter();
        logo.style.left = destination[0] + 'px';
        logo.style.top = destination[1] + 'px';
    }
}

function rng(){
    var range = colors.length;
    //make a rng that picks a number in that is in the color array
    
}

function borderCheck(random){
    //make variables to define the shape of the window (keep them in here so they update every frame)
    //check if the position (somehow figure out how to check if the box not just the top corner is at border)
    //change velocity to turn around the image
    changeColor(colors[random]);
}

function velocityConverter(){
    destinationX = position.left += velocity[0];
    destinationY = position.top += velocity[1];
    destination[0] = destinationX.toString();
    destination[1] = destinationY.toString();
}

function changeColor(color){
    logo.style.backgroundColor = color;
}

window.onload = moveAndBorder;