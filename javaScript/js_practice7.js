//create a function using "function" keyword that take a string as an argument and return the no of vowels in string

let count=0;
function count_vowel(str){
for(let i of str){
    if(i==="a" || i==="e" || i==="i"|| i==="o" || i==="u"){
        count=count+1;
//console.log(i);
    }
}
console.log(count);
}

count_vowel("abcdefghijklmnopqrstuvwxyz")