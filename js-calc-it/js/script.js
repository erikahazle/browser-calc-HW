var firstNumber = "";
var secondNumber = "";

var number = document.getElementsByClassName('number');
var display = document.getElementById('display');

for(var i=0;i<number.length;i++){
  number[i].addEventListener('click', numberValue, false);
}

function numberValue() {
  var attr = this.getAttribute('value');
  var initialValue = display.getAttribute('value')
  if (initialValue == null) {
    initialValue = display.setAttribute('value', attr);
    return initialValue;
  } else {
   initialValue = display.setAttribute('value', initialValue + attr);
  }
}

var operators = document.getElementsByClassName('operator');

for(var i=0;i<operators.length;i++){
  operators[i].addEventListener('click', opValue, false);
}

function opValue() {
  firstNumber = parseInt(display.getAttribute('value'));
  display.setAttribute('value', '');
  var operator = this.getAttribute('value');
  if (operator === '/') {
    secondNumber = parseInt(display.getAttribute('value'));
    var answer = firstNumber / secondNumber;
  } else if (operator === 'x') {
    secondNumber = parseInt(display.getAttribute('value'));
    var answer = firstNumber * secondNumber;
  } else if (operator === '+') {
    secondNumber = parseInt(display.getAttribute('value'));
    var answer = firstNumber + secondNumber;
  } else if (operator === '-') {
    secondNumber = parseInt(display.getAttribute('value'));
    var answer = firstNumber - secondNumber;
  } else if (operator === '=') {
    secondNumber = parseInt(display.getAttribute('value'));
    display.setAttribute('value', answer);
  };


}


