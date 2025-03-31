let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePar = document.querySelector("#user-score");
const compScorePar = document.querySelector("#comp-score")

const compChoice = () =>{
    const options = ["rock","paper","scissors"];
    let idx = Math.floor(Math.random()*3);
    return options[idx];
};

const draw= () =>{
    msg.innerText = "match was draw"
    console.log("game was draw.");
    msg.style.backgroundColor = "#081b31";
}

const showWin=(userWin,userChoice,ComptChoice)=>{
    if(userWin){
        userScore++;
        userScorePar.innerText=userScore;
        console.log("user win");
        msg.innerText = `you Win ! ${userChoice} bets ${ComptChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        CompScore++;
        compScorePar.innerText=CompScore;
        console.log("you loss");
        msg.innerText = `you loss ! ${ComptChoice} bets ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice)=>{
    console.log("user choice ",userChoice);
    //gen computer choice
     let ComptChoice = compChoice();
     console.log("comp choice",ComptChoice);

     if(ComptChoice ==userChoice ){
        draw();
     }else{
        let userWin = false;

        if(userChoice === "rock"){
            //paper || Scissors
            userWin = ComptChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock , scissors
            userWin = ComptChoice  ==="scissors" ? false : true;
        }
        //Scissors
        else{
            //rock , paper
            userWin = ComptChoice  ==="rock" ? false : true;
        }
        showWin(userWin,userChoice,ComptChoice);
     }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})