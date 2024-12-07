let boxes=document.querySelector(".boxes");
let btn=document.querySelectorAll(".btn");
let result=document.querySelector(".result");
let AC=document.querySelector(".btnAC");
let equal=document.querySelector(".equal");
result.value="";
btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log(box.value);
        result.value +=box.value;
        result.innerText=result.value;  
    });  
});
const multiplaction=(val1,val2)=>{
    result.innerText=val1*val2;
}
const division=(val1,val2)=>{
    result.innerText=val1/val2;
}
const add=(val1,val2)=>{
    result.innerText=Number(val1)+Number(val2);
}
const sub=(val1,val2)=>{
    result.innerText=val1-val2;
}
equal.onclick=()=>{
let idx=0;
    for(let val of result.value){
        if(val=="*" || val=="+" || val=="-" || val=="%"){
            id=idx;
        }
        idx++;
    }
    let val1=(result.value).slice(0,id);
    let val2=(result.value).slice(id+1,);
    for(let val of result.value){
        if(val=="*"){
            multiplaction(val1,val2);
        }
        else if(val=="%"){
            division(val1,val2);

        }
        else if(val=="+"){
            add(val1,val2);

        }
        else if(val=="-"){
            sub(val1,val2);

        }
    }
    result.value="";
    }
    AC.onclick=()=>{
        result.value="";
    result.innerText=result.value;
    }


   
