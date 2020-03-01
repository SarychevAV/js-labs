var angle = $('.angle');
var func = $('.function');
var result = $('.result');

var submit = $('.submit');

submit.on('click', () => {
  var valAngle = angle.val();
  var valFunc = func.val();
  var resultText = `${valFunc}(${valAngle}) = `;
  if (valAngle => 0 && valAngle <= 90) {
    switch (valFunc) {
      case 'sin':
        resultText += Math.sin(valAngle * Math.PI / 180).toFixed(2);
        break;
      case 'cos':
        resultText += Math.cos(valAngle * Math.PI / 180).toFixed(2);
        break;
      case 'tg':
        resultText += Math.tan(valAngle * Math.PI / 180).toFixed(2);
        break;
      default:
    }
  }
  result.text(resultText);
})
