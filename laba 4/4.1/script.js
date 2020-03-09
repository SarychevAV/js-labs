// JavaScript Document
var photo= new Array() 
photo["car"] = new Image(1024,768);
photo["car"].src = "car.jpg";
photo["city"] = new Image(1024,768);
photo["city"].src = "city.jpg";
photo["food"] = new Image(1024,768);
photo["food"].src = "food.jpg";
photo["animal"] = new Image(1024,768);
photo["animal"].src = "animal.jpg";
photo["forest"] = new Image(1024,768);
photo["forest"].src = "forest.jpg";

function prosm(list) {
d = list.options[list.selectedIndex].value //d ="les" 
obj=document.getElementById('foto');
obj.src = photo[d].src; //fot – имя тега IMG \
}
