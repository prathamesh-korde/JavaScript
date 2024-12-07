//WINDOW OBJECT
//the window object represent an open window in a browser.
//it is browser's object(not't java script) and it automatically created by browser
//it is global object with lots of properties and method("part of window object")(l.e-window.console.log(),window.alert()/prompt())
console.log(window);
console.log("hellow1");
window.console.log("hellow2");
window.alert("dom");

//WHAT  IS DOM?
//all the content under html is accesiable by js file as object and we give them special name as document and is available as sub-object in window object
//we are able to acces document object throw searching in window object or by window.documnt
console.log(window.document);
//to acces an properties and method of document object we can write console.dir(window.document)
console.dir(window.document);
//console.dir are used to print properties and methods of special object where console.log() print object as an element
//when a web page is loaded,the browser creates an DOM(document object model) of the page
//DOM is a tree like strecture start from window object with ther sub-nodes(objects)
console.log(document.body.childNodes[1]);
document.body.childNodes[1].innerText="abc";//dynamic manapulation or chang

//if we add script tag in html in head tag then elements in DOM element are in accessible as js file is load before body element
//as result console.log(document.write); gives null

//DOM manipulation-
//1.selecting with id
 console.log("selecting with id");
let heading = document.getElementById("id_1");
//if we pass id as argument which is not in html it print null
console.log(heading);

//2.selecting with class
console.log("selecting with class");
let headings=document.getElementsByClassName("class_1");
//it return html collection("it is very simillar to array")
//if we pass class as argument which is not in html it gives empty html collection
console.dir(headings);
console.log(headings);

//3.selecting with tag
console.log("seleting with tag")
let paras=document.getElementsByTagName("p")
console.dir(paras);

//4.Query selector
//document.querySelector("#myid/.myClass/tag"); //return first element
//document.querySelectorAll("#myid/.myClass/tag");//return all element
console.log("query selector");
let elements=document.querySelector(".class_1");//1st element
console.dir(elements);

let allEl=document.querySelectorAll(".class_1");//all element
//returns the node list
console.dir(allEl);


console.log("PROPERTIES");
//5.PROPERTIES
//tagName-return tag of element node
console.log(elements.tagName);
console.log(document.body.firstChild);
//explore abouy firstchid,listchild,children on mdn
console.log(document.querySelector("div").children);
//types of dom nodes-1.text node
//2.comment
//3.elements("explore more about it")

//innerText:return text content of the element and all its children
let div=document.querySelector("div").innerText;//gives pure text content
console.dir(div);

//innerHTML:return the plain text or html contents in the element

//get operation
let inner=document.querySelector("div").innerHTML;//gives text alog with tag's
console.dir(inner);
//set operation
//div.innerText="vagies";
//div.innerHTML="<div> inner div </div>"

//textContent:returns textual content even for hidden elements
console.log("inner text");
let old_heading=document.querySelector("#id");
//console.log(old_heading);
console.log(old_heading.innerText);//gives ('')
console.log(old_heading.textContent);

console.log("getAttribute");
//getAttribute(attr)    //to get the attribute value
let id_box=document.querySelector("div");
console.log(id_box);

let id=id_box.getAttribute("id");
console.log(id);

let name_div=id_box.getAttribute("name");
console.log(name_div);

console.log("set attribute");
//setAttribute(attr,value)    //to set attribute value
let id_box1=document.querySelector("div");
console.log(id_box1);

let box1 =id_box1.setAttribute("id","new_id");
console.log(id);


console.log("node.style");//used to chande styling within js
console.log(id_box.style);  //it display only inline css
id_box.style.backgroundColor="green";
id_box.style.fontSize="26px";
//id_box.innerText="hellow!";     

//DOM manipulation
//let el=document.createElement("div");
console.log("insert element");
console.log("ctreating new element");
let newBtn=document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);

//method to add element in dom strecture
//node.append(el)//add at end of node (inside)
let di=document.querySelector("div");
//di.append(newBtn);    // add at end of node
//di.prepend(newBtn);     // add at start onf node
//di.before(newBtn);       //add at just start of node
di.after(newBtn);       //add after just end of node

console.log("delete element");
// di.remove();          //used to remove selected element

//exploer more about apped child and remove child