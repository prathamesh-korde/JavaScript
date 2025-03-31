/*function asynFun1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data1");
        resolve("success"); 
    },3000)
        });
}

function asynFun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data2");
        resolve("success"); 
    },3000)
        });
}

console.log("feaching data1....");
let p1=asynFun1();
p1.then((res)=>{
    console.log(res);
    console.log("feaching data2....");
    let p2=asynFun2();              
p2.then((res)=>{
    console.log(res);
});
});
*/

//solving a callback problem by using promise chain

function getData(dataId,getNext){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },3000)
    });
    
}


//ASYNC-AWAIT
//async function alyays returns a promise

//await pauses the execution of its surrounding async function until the promise is settled
//await can't be use normally. it only can be use within a async function
(async function(){
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
    console.log("getting data4....");
    await getData(4);
})();

//IIFE-(Immediately invoked function Expression)
//IIFE is a function that is called immediately as soon it defined
//IIFE is only one time execuatable(more about it on mdn..)

/*
//promise chain

getData(1).then((res)=>{
    return getData(2);
    })
    .then(()=>{
        return getData(3);
    })
    .then((res)=>{
        console.log(res);
    })
        */


//call-back hell
/*
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
*/