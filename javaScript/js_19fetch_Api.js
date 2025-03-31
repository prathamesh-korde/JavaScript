const URL="https://cat-fact.herokuapp.com/facts";
const factpara=document.querySelector("p");
const btn=document.querySelector(".btn");



//by using async-await 
const getFacts=async()=>{
    console.log("getting Data.....");
    let responce=await fetch(URL);
    console.log(responce);// JSON Format
   let data= await responce.json();
   console.log(data);
   console.log(data[0].text);
   factpara.innerText=data[4].text;

};
/*
//by using promise chaning
function getFacts(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        factpara.innerText=data[4].text;
    })
}
*/

btn.addEventListener("click",getFacts);

//explore more about"http request methods" and "HTTP response status codes"
//HW-"sending post request"