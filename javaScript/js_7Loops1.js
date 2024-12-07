//lop are used to execute a piece of code again and again
//1.FOR LOOP
/*SYNTAX-
for(initilize;stopping condition;updation){
//block of code
}

2.while loop
syntax-
while(condition){
//block of code
}

3.do-while
syntax-
do{
//block of code
}while(condition);   

4.for-of
mainly used for string and array variable
syntax-
for(let var of strVar){
block of code
}

ex-
let name="prathamesh";
for(let i of name){//iterator
    console.log(i);
}

5.for-in
mainly used for objects and arrays
syntax-
for(let key in objvar){
block of code
}
*/
let student ={
    name:"prathamesh",
    age:20,
    chpa:8.2,
    isPass:true,
};
for(let i in student){
    console.log(i);//return onk keys
    console.log("value=",student[i]);
}