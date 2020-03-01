var submitButton = $('.submitButton');
var furniture = $('.furniture');
var material = $('.material');
var count = $('.count');

submitButton.on('click', () => {
  var resultText =
  `Был заказан товар : ${furniture.val()}\nИз материала : ${material.val()}\nВ количестве : ${count.val()}`;
  if (count.val() > 1 && count.val() < 50) {
    alert(resultText);
  } else {
    alert('Введите кол-во товара в диапазоне от 1 до 50');
  }
})
