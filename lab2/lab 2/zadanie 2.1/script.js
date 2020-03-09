var object;
var f=1;
var fontsize;
var fontcolor;
var fontbackground;

function clickOnFirst(){

}

function clickOnSecond(){
object=document.getElementById('1');
console.log(f);
if (f==1) {
object.style.fontSize='48px';
object.style.color='white';
object.style.background='aqua';
f=0;
} else {
  backSecondToDefault();
  f=1;
}
}



function backSecondToDefault() {
object=document.getElementById('1');
object.style.fontSize='18px';
object.style.color='black';
object.style.background='white';
}

function overThird(){
object=document.getElementById('2');
object.style.background='red';
}

function downThird(){
object=document.getElementById('2');
object.style.background='yellow';
}

function upThird(){
object=document.getElementById('2');
object.style.background='green';
}

function overFourth(){
object=document.getElementById('2');
object.style.background='red';
}

function overFourth(){
object=document.getElementById('3');
object.style.background='red';
}

function outFourth(){
object=document.getElementById('3');
object.style.background='aqua';
}
