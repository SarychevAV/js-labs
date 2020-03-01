var submitButton = $('.submitButton');
var furniture = $('.furniture');
var material = $('.material');
var count = $('.count');

submitButton.on('click', () => {
  var resultText =
  `Был заказан товар : ${furniture.val()}\nИз материала : ${material.val()}\nВ количестве : ${count.val()}`;
  alert(resultText);
})
