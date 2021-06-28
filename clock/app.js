// var x=" ";y=" ";
// for ( i = 1; i<=60; i++) {
//   x+= '<div class="clock-number number'+i+'">'+i+'</div>';
//     document.getElementById("clock").innerHTML=x;
//     y=6*i;

//     console.log(y);
// document.getElementsByClassName("number"+[i]).style.transform = "rotate("+y+")";

// }

var x;
let y=0;
for(i=1;i<=60;i++){
  x=document.createElement('div');
 if(i%5==0){
  x.classList.add('clock-number1');
 } else {
  x.classList.add('clock-number');
 }

  //x.textContent=i;
  x.style.transform=`rotate(${y}deg)`;
  document.getElementById("clock").appendChild(x);
  y+=6;
  
}

  
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()