//morden array method-

//1.forEach loop in array(higher orde method/function)
//HIGHER ORDE FUNCTION/METHOD-use some method as parameter(callback) or return some function as value
//is only used for array not for string
//when we associate an function with some object is called as method
//SYNTAX-
//arr.forEach(callBackFunction)
//a callback is a function passed as argument to another function
//CALLBACK:it is function to execute for each element in the array

let arr=[1,2,3,4,5,6,7];
 arr.forEach(function printval(val) {
    console.log(val);
 });
 arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);

});
//console.log("map method");
//callbak function consist three parameters which are optional
//1.value
//2.index
//3.array itself

//2.Map
//Map is varey simillar to forEach method as is used for excuate each element in array
//map create a new array with the result of some operation.the value its callback returns are used to form new array
//SYNTAX-
//arr.map(callbackFnx(value,index,array));//generally value is only used in this method
let arry=[1,5,58,65,45];
 let newArry=arry.map(val=>{
    return val;
}
);
console.log(newArry);
 console.log("filter method");
//3.filter
//create a new array of elements that gives true for a condition/filter.\
//orignal array remain unchange
let number=[14,15,78,57,65,45,42];
let evenArr=number.filter((val)=>{
    return val%2===0;

});
console.log(evenArr);

console.log("reduce method");
//REDUCE
//perform some operation & reduce the array to a single value.it return the single value
let num=[1,45,75,92,69,35];
//code to find largest number among a given array
let output=num.reduce((result,current)=>{//priviouse:number,current:number or accumulator,currentValue
    return result>current?result:current;
    //return result+current;

});
console.log(output);//1+2+3+4=10(result_value)
