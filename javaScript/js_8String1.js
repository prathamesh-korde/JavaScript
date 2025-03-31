//STRING-string is the sequence of character to represent text
let name="prathamesh korde";
console.log(name.length);//use to calculate length of string
console.log(name[11]);//k

//TEMPLATE LITERALS IN JS-
// a way to have embedded expression in string
let obj={
    item:"pen",
    prise:10,
}
//normal access
console.log("the cost of",obj.item,"is rupees",obj.prise);

//by using an template literals
let output=`the cost of ${obj.item} is rupees ${obj.prise} ${4+5*7}`;
console.log(output);

//STRING INTERPOLATION-
//to create string by doing substitution of placeholder
//EX-`string text ${expression} string text`

////ESCAPE CHARACTER -
// \n -next line
// \t -tab space
let str="prathamesh\tsudhakar\nkorde";
console.log(str);
console.log(str.length);//expected length-27 real-25
//length of escape character is -1