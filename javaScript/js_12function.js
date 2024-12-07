//FUNCTION-block of code that perform a specific task , can be invoked whenever needed 
//use to avoid redundency("duplication or repeatiation")
//SYNTAX-*functin defination-
//function functionName(){
//     block of code  
//    }


// function call
//functionName();

function sum (x,y){//parameter
    //scope->x and y is local variable
    console.log("before return");
    s=x+y;
    return s;
    //after return no one code is execuate
    console.log("afer return");
}
let val=sum(3,4);//argument
console.log(val);

//ARROW Function-compact way to write a function
//mainy used fo to create small function
//SYNTAX-const fun_name=(para1,para2,...) =>{
 //  do some work   
//  };

//example-
const arrowSum=(a,b)=>{
    return a+b;
};
console.log(arrowSum(4,5));

let arrowMul=(x,y)=>{
    return x*y;
};
console.log(arrowMul(4,5));

