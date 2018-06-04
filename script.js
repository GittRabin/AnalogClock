const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



function runClock(){
  /* if you want to make transition working use this
  hrPosition = hrPosition+(3/360);
  minPosition = minPosition+(6/60);
  secPosition = secPosition+6;
  */
/* This helps to update with time even you are away from browser*/
  var date = new Date();
  console.log(date);
  var hr  = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  console.log(hr,min,sec);

  let hrPosition = (hr*360/12)+((min*360/60)/12);
  let minPosition = (min*360/60)+((sec*360/60)/60);
  let secPosition = (sec*360/60);

HOURHAND.style.transform="rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform="rotate("+ minPosition+"deg)";
SECONDHAND.style.transform= "rotate("+secPosition+"deg)";
}

var interval = setInterval(runClock,1000);
