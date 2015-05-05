window.addEventListener("load", function() {

var number = document.getElementsByClassName('number');
var display = document.getElementById('display');

for(var i=0;i<number.length;i++){
  number[i].addEventListener('click', numberValue, false);
}

function numberValue() {
  var attr = this.getAttribute('value');
  display.addAttribute(attr);
}

var operator = document.getElementsByClassName('operator');

})


