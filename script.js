const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


let hrPosition = 29;
let minPosition = 90;
let secPosition = 40;


HOURHAND.style.transform="rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform="rotate("+ minPosition+"deg)";
