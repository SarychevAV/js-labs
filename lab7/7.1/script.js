var min = $('.min');
var max = $('.max');
var step = $('.step');
var func = $('.function');
var result = $('.result');
var submit = $('.submit');

submit.on('click', () => {
  var valMinAngle = min.val();
  var valMaxAngle = max.val();
  var valStep = step.val();
  var valFunc = func.val();
  var resultText;
  var grWin=window.open("","","width=650,height=400");
  grWin.document.write(`<html lang=ru dir="ltr">
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      <table border="2px" align="center">
          <tr>
              <td colspan="2">угол в градусах</td>
              <td  id="function" rowspan="2"></td>
          </tr>
          <tr>
              <td>в градусах</td>
              <td>в радианах</td>
          </tr>
        `);
    grWin.document.getElementById("function").innerText=valFunc;
    console.log(valMinAngle);
    console.log(valMaxAngle);
    console.log(valStep);
    while (valMinAngle<=valMaxAngle) {
    var angleRad = 0;
    angleRad = ((+valMinAngle*3.14)/180).toFixed(3);
    console.log(angleRad);
    switch (valFunc) {
      case 'sin':
        resultText = Math.sin(angleRad).toFixed(3);
        break;
      case 'cos':
        resultText = Math.cos(angleRad).toFixed(3);
        break;
      case 'tg':
        resultText = Math.tan(angleRad).toFixed(3);
        break;
      default:
    }
    grWin.document.write(`<tr>
        <td>`+valMinAngle+`</td>
        <td>`+angleRad+`</td>
        <td>`+resultText+`</td>
    </tr>`);
    console.log(valMinAngle);
    valMinAngle= +valMinAngle + +valStep;
    }
})
