console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hellow")}
    ,2000);    //timeout

    // Asynchronous code allow to execute next instruction immediately and does't block the flow
    console.log("three");
    console.log("four");
    
    //CALL-BACK
    //a callback is a function passed an argument to an another function

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sum){
    sum(a,b);
}
calculator(5,3,sum);



function getData(dataId,getNext){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNext){
            getNext();
        }
    },2000);
}

getData(1,()=>{
    console.log("getting data 2....");
    getData(2,()=>{
        console.log("getting data 3.....");
        getData(3,()=>{
            console.log("detting data 3.....");
            getData(4);
        });
    });
});
//CALLback HELL(pyramid of doom)
//above style of programming becomes difficult to understand & manage this comes out an problem called CALLBACK HELL
    
//callback hell- nested callbacks stacked below one another forming a pyramid structture.(pyramid od doom)


console.log("promises");
//PROMISES-(it is solution to callback hell)
//promise is for "eventual" completion of task.it is object in js

//syntax-
//let promise=new promise((resolve,reject)=>{....})
//resoive & reject are callback provided by js
//promices have three stages-1.pending 2.fuilfill(resolve) 3.rejected
 let promise = new Promise((resolve,reject)=>{
    console.log("i am promise");
   //resolve(135);
   reject("some error occured");
 })
    
function printData(dataId,getNext){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
           // reject("network error");
            if(getNext){
                printData();
            }
        },5000)
    });
}
    
const getPromise=()=>{
    return new Promise ((resolve,reject)=>{
        console.log("i am promise");
        //resolve("success");
        reject("error");
    })

};
let prom=getPromise();
prom.then((res)=>{
    console.log("promise fuilfilled",res);
});
prom.catch((err)=>{
    console.log("promise is rejected",err);

});



