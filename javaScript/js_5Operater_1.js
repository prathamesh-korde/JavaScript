//artimetic operators
let a=5;
let b=2;
console.log("a=",a ,"b=",b);
console.log("a-b=",a-b);
console.log("a+b=",a+b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b",a**=b); // a^b

//unary operator
console.log("a++",a++);//post-increment
console.log("a=",a);
console.log("a--",a--);//post-decrement
let c=5;
console.log("++c",++c);//pre-increment
console.log("--c",--c);//pre-decremental

//asignment operators
let x=5;
let y=2;
x+=4;
console.log("x=",x);
x-=4;
console.log("x=",x);
x*=4;
console.log("x=",x);
x/=4;
console.log("x=",x);
x%=4;
console.log("x=",x);
x**=4;
console.log("x=",x);

//comparison operators
//equal to - ==
//not equal to- !=
//equal to & type- ===
//not-equal to & type- !==
//<,>,<=,>=
console.log("a==b",a==b);//false
let p=5;//number
let q="5";//string
console.log("p==q",p==q);//true
console.log("p===q",p===q);//false

//logical operator(true/false)
//AND-&&, OR-||, NOT-!
console.log("p==q && p===q",p==q && p===q);

//ternary operator
//CONDITION ? TRUE OUTPUT:FALSE OUTPUT;
let age=25;
let result=age>18?"adult":"not-adult";
console.log(result);