const canvas = document.getElementById('drawingBoard');
const toolbar = document.getElementById('toolbar');
const context = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;
let strokes = [];
let index = -1;

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        context.clearRect(0, 0, canvas.width, canvas.height);
        strokes = [];
        index = -1;
    }
});

toolbar.addEventListener('click', e => {
    if (e.target.id === 'undo') {
        if(index <= 0){
            context.clearRect(0, 0, canvas.width, canvas.height);
            strokes = [];
            index = -1;
        }
        else{
            index -= 1;
            strokes.pop();
            context.putImageData(strokes[index], 0, 0);
        }
    }
});

toolbar.addEventListener('click', e => {
    if (e.target.id === 'print') {
        print()
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'colors') {
        context.strokeStyle = e.target.value;
        document.getElementById('currColor').style.backgroundColor = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
});

function changeColor(element){
    context.strokeStyle = element.style.background;
    document.getElementById('currColor').style.backgroundColor = element.style.background;
}

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    context.lineWidth = lineWidth;
    context.lineCap = 'round';

    context.lineTo(e.clientX - canvasOffsetX, e.clientY);
    context.stroke();

}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    context.stroke();
    context.beginPath();

    strokes.push(context.getImageData(0, 0, canvas.width, canvas.height));
    index += 1;
});

canvas.addEventListener('mousemove', draw);