var firstNumber = "0", secondNumber = "0", operator = "0";

/************************
FUNCTIONS FOR CALCULATIONS
************************/

var subtract = function(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

var add = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

var multiply = function(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

var divide = function(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}


/************************
ENTERING NUMBERS
************************/

var number = document.getElementsByClassName('number');
var display = document.getElementById('display');

for(var i=0;i<number.length;i++){
  number[i].addEventListener('click', numberValue);
}

function numberValue() {
  var attr = this.getAttribute('value');
  var initialValue = display.getAttribute('value')
  if (initialValue == null) {
    initialValue = display.setAttribute('value', attr);
  } else {
   initialValue = display.setAttribute('value', initialValue + attr);
  }
}

/************************
ENTERING OPERATORS
************************/

var operators = document.getElementsByClassName('operator');

for(var i=0;i<operators.length;i++){
  operators[i].addEventListener('click', opValue);
}

function opValue() {
  firstNumber = parseInt(display.getAttribute('value'));
  display.setAttribute('value', '');
  operator = this.getAttribute('value');
}

// Handling '=' operator

var equal = document.getElementsByClassName('eq');

equal[0].addEventListener('click', calculation);

function calculation() {
  secondNumber = parseInt(display.getAttribute('value'));

  switch (operator) {
    case '+':
      display.setAttribute('value', add(firstNumber, secondNumber));
      break;
    case '-':
      display.setAttribute('value', subtract(firstNumber, secondNumber));
      break;
    case '/':
      display.setAttribute('value', divide(firstNumber, secondNumber));
      break;
    case 'x':
      display.setAttribute('value', multiply(firstNumber, secondNumber));
      break;
  }
}

// Handling 'c' operator

var clear = document.getElementsByClassName('clear');

clear[0].addEventListener('click', clearAct, false);

function clearAct() {
  display.setAttribute('value', '');
}
