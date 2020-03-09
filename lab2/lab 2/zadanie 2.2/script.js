var i=0;
function  changing(){
  var e=window.event;
  id1=e.srcElement.id;
  switch (id1) {
    case "2":
      object=document.getElementById("2");
      console.log(object.src);
      if (object.src=="file:///Users/andrejsarycev/Documents/University/8%20%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80/js/js-labs/lab%202/lab%202/zadanie%202.2/tigr.jpg"){
        console.log('хочу меняться')
        object.src="/Users/andrejsarycev/Documents/University/8 семестр/js/js-labs/lab 2/lab 2/zadanie 2.2/sova.jpg";
        document.getElementById("3").textContent="А это сова";
      } else {
        object.src="/Users/andrejsarycev/Documents/University/8 семестр/js/js-labs/lab 2/lab 2/zadanie 2.2/tigr.jpg"
        document.getElementById("3").textContent="Это тигр";
      }
      break;
    case "3":
      object=document.getElementById("3")
      if (object.style.background=="white"){
        object.style.background="red";
      } else {
        object.style.background="white";
      }
      break;
  }
}
