//you are creating a website for collage create a class user with two properties
//name and email.it has also method called viewData() that allow user to view data

 let data="secrt information"
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data",data);
    }

}

//create new class ADMIN which inherites from user.add new ethod called edit data to admin that allow admin to edit website data
class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data="some new information";
    }
}
let stu1=new user("pratham","pratham@gmail.com");
let stu2=new user("abc","abc@gmail.com");

let admin1=new admin("admin","admin@gmail.com")