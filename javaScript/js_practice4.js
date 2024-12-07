//for a given array with marks of student ->[85,97,44,37,76,60]
//find the avgrage marks of the entire class
let marks=[85,97,44,37,76,60];
let sum=0;
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i];
}
console.log(sum);
let avg=sum/marks.length;
console.log(`average mark of the class=${avg}`);