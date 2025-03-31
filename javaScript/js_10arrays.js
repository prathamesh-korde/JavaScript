//ARRAYS-linear collection of  items having same name
//array is a spical type of object
//instence of key there exist an index no with their respective values 
/*let marks = [82,92,67,79,88];
console.log(marks);
console.log(marks.length);
console.log(typeof(marks));
console.log(marks[0]);//82
console.log(marks[100]);//undefined
marks[0]=99;//modification is possible(muatable)
//where the strings an inmutable
console.log(marks[0]);*/
//loops in array
let heroes =["ironman","thor","hanuman","shaktiman"];
//for loop
/*
for(let i=0;i<heroes.length;i++)
{
    console.log(heroes[i]);
}
    */
 //  for of
 for(hero of heroes){
    console.log(hero.toUpperCase());
 }