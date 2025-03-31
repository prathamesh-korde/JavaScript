//A JavaScript object is an entity having state and behavior (properties and mwthods)

const student={
    fullName:"prathamesh kordde",
    cgpa:8.56,
    printMarks:function (){
        console.log("cgpa=",this.cgpa);
    }
};
//js objects have a special property called prototype(is object within object)

const emp={
    //ways to create function under object
    calTax1() {
        console.log("tax rate is 10 %");
    },
    calTax2: function () {
        console.log("tax rate is 10%");
    }
};

const karanArjun ={
    salary:50000,
    calTax1(){
        console.log("tax rate is 20%");
    },
};
//js object has special property called prototype("reference to an object")
//we can set property using prototype._ _ proto _ _
karanArjun.__proto__=emp;
//if object and prototype have same method, object method is uded

//classes in js

//classes is a blueprint or template for object
//class is a program- code template for creating objects.thoose object will have some state (variables) & some behavior (functions) inside it
//class  mainly contain object's having simmilar properties and methods


class car{
    constructor( brand,mileage){
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand=brand;
    }
}

//conver object to class-
//let myObj=new myClass();
let maruti=new car("tata",10);// automatically constructor invoked
maruti.setBrand("bmw");

//constructor() method is:
//automatically invoked by new
//initialize object


//inheritence in js
//inheritence is passing down properties and method from parent class to child class

class person{
    constructor(name){
        this.species="homo sapiens";
        this.name=name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}
class engineer extends person{
    constructor(name){
        super(name);//to invoke parent class constructor
        //super keyword is used to call the constructor of its parent class to acces the parent's properties and methods
        //super(args)  //calls parent's constructor
    }
    work(){
        //super.parentMethod(args)
        super.eat();
        console.log("solve problem,build somthing");
    }
    // if parent and child class has same function then child class function is involved
    //if child and parent class have same method chilsd method will be used("METHOD OVERRIDING")

}
let engObj=new engineer("prathamesh");