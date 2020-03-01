var h2Element = document.getElementById('h2');
var h2LastElement = document.getElementById('h2last');
var pElement = document.all[8];
var divElement = document.getElementById('div');

function clickH2() {
  if (h2Element.style.color == '') {
    h2Element.style.color = 'white';
    h2Element.style.background = 'blue';
    h2LastElement.style.color = 'blue';
    h2LastElement.style.background = 'white';
    divElement.style.color = 'white';
    divElement.style.background = 'blue';
  } else {
    h2Element.style.color = '';
    h2Element.style.background = 'yellow';
    h2LastElement.style.color = 'yellow';
    h2LastElement.style.background = 'black';
    divElement.style.color = '';
    divElement.style.background = 'yellow';
  }
}

function clickP() {
  if (pElement.style.color == 'red') {
    pElement.style.color = 'white';
    pElement.style.background = 'green';
  } else {
    pElement.style.color = 'red';
    pElement.style.background = '';
  }
}
