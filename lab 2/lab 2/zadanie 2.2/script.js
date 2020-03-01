var i=0;
function  changing(){
  var e=window.event;
  id1=e.srcElement.id;
  switch (id1) {
    case "2":
      object=document.getElementById("2");
      if (object.src=="file:///C:/images/tigr.jpg"){
        console.log('хочу меняться')
        object.src="file:///C:/images/sova.jpg";
        document.getElementById("3").textContent="А это сова";
      } else {
        object.src="file:///C:/images/tigr.jpg"
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
