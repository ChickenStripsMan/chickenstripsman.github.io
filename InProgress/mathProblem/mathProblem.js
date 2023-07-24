//https://www.youtube.com/watch?v=094y1Z2wpJg&ab_channel=Veritasium
var input = '';
const output = document.getElementById('output');
const result = document.getElementById('result');

document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
    if(key === 13){
        run();
    }
}

function run(){
    console.clear();
    output.innerHTML = '';
    input = document.getElementById('input').value;
    interpreter(input);
}

function interpreter(text){
    if(text == ''){
        result.innerText = 'please enter a value';
        return;
    }
    else if(isNaN(text)){
        result.innerText = text + ' is not a valid input';
        console.log(text + ' is not valid input');
    }
    else{
        text = parseInt(text);
        while(text != 1){
            if(text % 2 == 0){
                //even
                text = text / 2;
            }
            else if(text != 1){
                //odd
                text = text * 3;
                text = text += 1;
            }
            else{
                return;
            }
            console.log(text);
            addOutput(text);
        }
        result.innerText = 'number is 1 and is stuck in loop'
        console.log('number is 1 and is stuck in loop');
    }
}

function addOutput(text){
    var element = document.createElement('p');
    element.innerHTML = text;
    output.insertBefore(element, output.children[0]);
}