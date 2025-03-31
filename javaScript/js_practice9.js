//we are given an array of mark of student,find the mark of student that scorde 90+
/*
let mark=[54,95,25,64,76,99,95,73];
let newMark=mark.filter((val)=>{
    return val>90;
});
console.log(newMark);
*/
//take a number n as input from user.create an array of numbers from 1 to 

let n=prompt("enter a number");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);
//use the reduce method to calculate sum of number

let sum= arr.reduce((result,current)=>{
    return result+current;
});
console.log(sum);

//use the reduce method to calculat product of all number of array
let facto= arr.reduce((result,current)=>{
    return result*current;
});
console.log(facto);