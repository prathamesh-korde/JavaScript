//write a code which can give grades to the student according to their scores
let score=prompt("enter score between 0-100:");
console.log("your grade is-");
if(score>=80 && score<=100){
    console.log("A");
}
else if(score>=70 && score<=89){
    console.log("B");
}
else if(score>=60 && score<=69){
    console.log("C");
}
else if(score>=50 && score<=59){
    console.log("D");
}
else{
    console.log("F");
}
