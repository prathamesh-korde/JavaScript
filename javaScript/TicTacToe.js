let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let winContainer=document.querySelector(".winng-container");
let msg=document.querySelector("#msg");
let turnO=true;

const WinPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetbtn=()=>{
    turnO=true;
    enablebox();
    winContainer.classList.add("hide");
}
let box=document.querySelector(".box");
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        if(turnO===true){
            box.innerText = "O";
            turnO=false;
            box.style.color="black";
        }
        else{
            box.innerText="X";
            turnO=true;
            box.style.color="red";
        }
        box.disabled=true;

        checkWinner();
    });

});
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const gameTie=()=>{
    for(let box of boxes){
        if(box==true){
            msg.innerText=`game is tie`;
    winContainer.classList.remove("hide");
        }
    }
};
const showWineer=(winner)=>{
    msg.innerText=`congrulation! ,winner is ${winner}`;
    winContainer.classList.remove("hide");
    disablebox();

};

const checkWinner=()=>{
    for(let pattern of WinPatterns){
        let pos1val=boxes[pattern[0]].innerText;
    let pos2val= boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;  
    if(pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner",pos1val);
            showWineer(pos1val);
        }
    }

    }
    
} ;

newGameBtn.addEventListener("click",resetbtn);
resetBtn.addEventListener("click",resetbtn)