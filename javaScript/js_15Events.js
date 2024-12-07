//EVENTS IN JS_
//the change in the state of an object is known as event
//events are fired to notify code of "interesting change" that may affect code executation
//SYNTAX-
//node.event=()=>{
    //  handle here
    //  };

//event handling in js has more privority over the event handling in inline handling in html 

let btn_1=document.querySelector("#btn_1");
btn_1.onclick=()=>{
    console.log("btn_1 was clicked");
    let a=25;
    a++;
    console.log(a);   //26
};

let div=document.querySelector("#div");
div.onmouseover=()=>{
    console.log("handler 1");
};
//if we overwrite an Events over other Event then the last one will applid 
div.onmouseover=()=>{
    console.log("handlar 2");
};
let id=document.querySelector("p");
id.onmouseover=()=>{
    console.log("this is p1");
};


//EVENT OBJECT
//it is a special object that has details about events .
//all event handlers have access to the event object's properties and mthod
let btn_2=document.querySelector("#btn_2");
btn_2.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
}

//EVENT LISTENERS
//node.addEventListener(event,callback)
//eventListener enabel to perform multiple operation over a single event

btn_1.addEventListener("click",(evt)=>{
    console.log("button was clicked - handler1");
    console.log(evt);
    console.log(evt.type);
});

btn_1.addEventListener("click",()=>{
    console.log("button was clicked - handler2");
});
 const handlar3=()=>{
    console.log("button was clicked - handler3");
}
btn_1.addEventListener("click",handlar3);

btn_1.addEventListener("click",()=>{
    console.log("button was clicked - handler4");
});

//remove the eventListener
//node.removeEventListener(event,callback)
//note-the callback reference should be same to remove
btn_1.removeEventListener("click",handlar3);

//create a toddle button that changes the screen to dark-mode when clicked and light mode when click again
let modeBtn=document.querySelector("#btn_3");
let body=document.querySelector("body");
let currMode="light";
modeBtn.addEventListener("click",()=>{
    if(currMode=="light"){
        currMode="dark";
        //document.querySelector("body").style.backgroundColor="black";
       body.classList.add("dark");
       body.classList.remove("light");
    }
    else{
        currMode="light";
        //document.querySelector("body").style.backgroundColor="white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});

