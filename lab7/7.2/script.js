var table = document.getElementById('table');
var tbody = document.getElementById('tbody');

var product = document.getElementById('product');
var cost = document.getElementById('cost');
var count = document.getElementById('count');
var addButton = document.getElementById('addButton');

var sumCol = document.getElementById('sumCol');
var allSum = document.getElementById('allSum');

addButton.addEventListener('click', function() {
  console.log(product.value);
  console.log(cost.value);
  console.log(count.value);
  var trElem = document.createElement('tr');
  var tdElem = document.createElement('td');
  tdElem.innerHTML = product.value;
  trElem.appendChild(tdElem);
  tdElem = document.createElement('td');
  tdElem.innerHTML = cost.value;
  trElem.appendChild(tdElem);
  tdElem = document.createElement('td');
  tdElem.innerHTML = count.value;
  trElem.appendChild(tdElem);
  tdElem = document.createElement('td');
  tdElem.innerHTML = count.value * cost.value;
  trElem.appendChild(tdElem);
  console.log(trElem);
  tbody.prepend(trElem);
  allSum.innerHTML = + allSum.innerHTML + count.value * cost.value;
});
