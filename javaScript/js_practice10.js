//create h2 heading element with text -"hellow javaScript".append "from apana collage student" to this text using  js
let h2=document.querySelector("h2");
h2.innerText=h2.innerText+" from apana collage student";
let h3=document.querySelector("h3");
let h4=document.querySelector("h4");
h3.innerText=h4.innerText+h3.innerText;

//create 3 div with common class name-"box".access them & add some unique text to each of them
let divs=document.querySelectorAll(".box");
/*
console.log(divs);
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);
divs[0].innerText="new unique value 1";
divs[1].innerText="new unique value 2";
divs[2].innerText="new unique value 3";
*/
console.log("loop");
let idx=1;
for(dive of divs){
    console.log(dive);
    dive.innerText=`new unique value ${idx}`;
    idx++;
}