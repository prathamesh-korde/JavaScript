//for a given array of numbers,print the square of each value using the foer each loop
let arr=[1,2,3,4,5];
/*arr.forEach((val)=>
{
   // console.log(val*val); or
   console.log(val**2);
});
*/
//or
let calSquare=(val)=>{
    console.log(val**2);
};
arr.forEach(calSquare);