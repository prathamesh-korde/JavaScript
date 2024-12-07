//for the given array with the prise of 5 items ->[250,645,300,900,50]
//all the items have offer 10% off on them.change the array to store the final prise sfter appling offer
let items=[250,645,300,900,500];
let i=0;
for(let val of items){
    console.log(`value at index ${i}=${val}`);
    let offer=val/10;
    items[i]=items[i]-offer;
     console.log(`value after offer=${items[i]}`);
    i++;

}
/*for(let i =0;i<items.length;i++){
    arr[i]=arr[i]/10;
}
console.log(items[0]);
*/