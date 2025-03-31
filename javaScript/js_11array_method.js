//array method-
//push():add to end
//pop():delete from end & return
//toString():convert array to string
//concat():join multiple array and return result
//unshift:add to start
//shift():delte from start and return
//slice():return a pice of array with no change in orignal array
//slice(starting_index,ending_index); starting index included ending index excluded
//splice():change the orignal array
//splice(startidx,delCount,newelement1,newelement2,...);
let food=["apple","banana","mango","watermolen","lemon"];
food.push("potato","gobi");
console.log(food);
let deletItem=food.pop();
console.log(food);
console.log(deletItem);
console.log(food.toString());
let vag=["potato","gobi","bedi"];
let masala=["maharaja","shejvan"];
console.log(food.concat(vag,masala));
food.unshift("dragon food");
console.log(food);
food.shift();
console.log(food);
console.log(food.slice(1,3));
let arr=[1,2,3,4,5,6,7];
//add element
arr.splice(3,0,101);
//delete element
arr.splice(2,1);
//replace element
arr.splice(2,1,103);
arr.splice(4);//after reachinf at starting index delete element after it
//and if no argument pass then to element will be delete
console.log(arr);