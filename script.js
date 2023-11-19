let display = document.getElementById('display');
let nums = document.getElementsByClassName('num');
let ops = document.getElementsByClassName('op');
let clear = document.getElementById('clear');
let equals = document.getElementById('equals');

let operand1 = '';
let operand2 = '';
let operator = '';

for(let i=0; i<nums.length; i++) {
    nums[i].addEventListener('click', function(){
        if(operator === '') {
            operand1 += this.innerText;
            display.innerText = operand1;
        } else {
            operand2 += this.innerText;
            display.innerText = operand2;
        }
    });
}

for(let i=0; i<ops.length; i++) {
    ops[i].addEventListener('click', function(){
        operator = this.innerText;
    });
}

clear.addEventListener('click', function(){
    operand1 = '';
    operand2 = '';
    operator = '';
    display.innerText = '0';
});

equals.addEventListener('click', function(){
    let result;
    switch(operator) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
    }
    display.innerText = result;
    operand1 = result;
    operand2 = '';
});
