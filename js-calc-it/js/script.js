var firstNumber = "0", secondNumber = "0", operator = "0";

/************************
FUNCTIONS FOR CALCULATIONS
************************/

var substract = function(firstNumber, secondNumber) {
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
  number[i].addEventListener('click', numberValue, false);
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
  operators[i].addEventListener('click', opValue, false);
}

function opValue() {
  firstNumber = parseInt(display.getAttribute('value'));
  display.setAttribute('value', '');
  operator = this.getAttribute('value');
  if (operator === '/') {
    answer = divide(firstNumber, secondNumber);
  } else if (operator === 'x') {
    answer = multiply(firstNumber, secondNumber);
  } else if (operator === '+') {
    answer = add(firstNumber, secondNumber);
  } else if (operator === '-') {
    answer = substract(firstNumber, secondNumber);
  } 
}

// Handling '=' operator

var equal = document.getElementsByClassName('eq');

equal[0].addEventListener('click', calculation, false);

function calculation() {
  secondNumber = parseInt(display.getAttribute('value'));
  display.setAttribute('value', answer);

  switch (operator) {
    case '+':
      display.setAttribute('value', add(firstNumber, secondNumber));
      break;
    case '-':
      display.setAttribute('value', substract(firstNumber, secondNumber));
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
