 //print the prime number from 0 to 100
 /*
 for(let i=0;i<=100;i++){
    if(i%2==0){

    console.log(i);
 }
}
 */
//create a game where you start with any random game number.
//ask the user to keep guessing game number until user enter correct value
let gameNum=25;
let b=prompt("guess any number from 1 to 100");
    while(gameNum!=b){
    b=prompt("guess any number from 1 to 100");
    console.log(b);
    console.log("sorry! you loss try again");
    }
console.log("yes! you win");
