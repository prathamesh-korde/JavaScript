const base_url="https://api.currencyapi.com/v3/latest?apikey=cur_live_untO7uqbuKrsHt6ErFE9nIPJk8S7vO71FP4bumHQ";

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");


let i=0;
for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from"&& currCode==="USD"){
            newOption.selected="selected";
        }
        else if(select.name==="to"&& currCode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);

    }
    const updateExchangeRate=async()=>{
        let amount=document.querySelector(".amount input");
        let amountVal=amount.value;
        if(amountVal==="" || amountVal<1){
            amountVal=1;
            amount.value="1";
        }
    //console.log(fromCurr.value,toCurr.value);
        const URL=`${base_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
        let responce=await fetch(URL);
        let data=await responce.json();
        let rate=data[toCurr.value.toLowerCase()];
    
        let finalAmount=amountVal*rate;
        msg.innerText=`${amountVal}${fromCurr.value}=${finalAmount} ${toCurr.value}`;
    
    }

    const updateFlag = (element) => {
        let currCode = element.value;
        let countryCode = countryList[currCode];
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img = element.parentElement.querySelector("img");
        img.src = newSrc;
      };
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchangeRate();
});
document.addEventListener("load",()=>{
    updateExchangeRate();
});
window.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

