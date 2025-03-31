const student={
    //key and value pair 
    name:"prathamesh korde",
    age:20,
    cgpa:9.0,
    isPass:true,
};
//key inside constant object can be modefied as entie object can't change byb it
student["age"] = student["age"]+1;
console.log(student);
console.log(student["name"]);
console.log(student.age);
