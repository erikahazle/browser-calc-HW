var number = document.getElementsByClassName('number');
var display = document.getElementById('display');

for(var i=0;i<number.length;i++){
  number[i].addEventListener('click', numberValue, false);
}

for(var i=0;i<number.length;i++){
  operator[i].addEventListener('click', opValue, false);
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
  return display.getAttribute('value');
}

var operator = document.getElementsByClassName('operator');




