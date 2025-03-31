function api(idx){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("wather data",idx);
            resolve(200);
        },2000);
    })
}
(async function wathherData() {
    console.log("gatting data 1...");
    await api(1);
    console.log("gatting data2 ...");
    await api(2);
    console.log("gatting data 3 ..");
    await api(3);
})();
/*
async function hellow(){
    console.log("hellow");
}*/

/*const getpromise=()=>{
    return new Promise ((resole,reject)=>{
        console.log("Promice");
        reject("network error")
    });
};


let promice = getpromise();

promice.then((res)=>{
    console.log("promice result",res);
})

promice.catch ( (err) =>{
    console.log("rejected",err);
})
*/
/*
function getDtata(dataid,getNxt){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("sucess");
        },2000)
    });
}


getDtata(1).then((res)=>{
    console.log(res);
    return getDtata(2);
}).then((res)=>{
    console.log(res);
    return getDtata(3);
}).then((res)=>{
    console.log(res);
})
*/
    /*
function asyncFunc(){
    return new Promise((resole,reject)=>{
        setTimeout(()=>{
            console.log("some data1 .. ");
            resole("sucess");
        },2000);
    });
}

    console.log("featching data1 ..");
    let p1 = asyncFunc();
    p1.then((res)=>{
        console.log(res);
        console.log("getting data 2 ..");
        let p2 = asyncFunc();
        p2.then((res)=>{
            console.log(res);
        })
    });
*/
    
/*let promise = new Promise((resole,reject)=>{
    console.log("i am promice");
    resole("some err");
});


function getdata(dataid,getNxt){
    return new Promise((resole,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resole("sucess");
            if(getNxt){
                getNxt();
            }
        },5000)
    });
}
    */

// call back hell
/*
function getdata(data,getNxt){
    setTimeout(()=>{

    console.log("data",data);

    if(getNxt){
        getNxt();
    }
    },2000)

}

getdata(5,()=>{
    getdata(10,()=>{
        getdata(25);
    });
});*/