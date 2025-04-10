const url = "https://dog.ceo/api/breeds/image/random";
const facts = document.querySelector("#facts");
const btn = document.querySelector("#btn");

const getfacts = async()=>{
    console.log("gatting data....");
    let responce = await fetch(url);
    console.log(responce);//json formate
    let data = await responce.json();
    facts.innerText = data.text;
}

btn.addEventListener("click",getfacts)
/*
function getfacts(){
    fetch(url).then((responce)=>{
        return responce.json;
    }).then((data)=>{
        facts.innerText = data[0].text;
    })
}
    */
   


