let User1 = {
     name: "Elavarasu",
     age:27,
login(Hi,name)
{
    console.log('Hi',this.name) //instead we can use this for accessing the object ref
    console.log("You are logged in")
},
logout()
{
    console.log("You are logged out");
}
}
User1.login()

//class -> baseclass , parentclass or superclass in java
class User { 
    static numberOfuser = 0;
    constructor(name, age) //also a method default
    {  
        this.name = name;
        this.age = age;
        User.numberOfuser++;
    }
    login()
    {
        console.log('Hi',this.name)
        console.log("You are logged in");
    }
    logout()
    {
        console.log('Hey',this.name)
        console.log("You are logged out");
    }
    static displayNumberofUSers()
    {
        console.log('total no.of users is', User.numberOfuser);
    }
}

//createobject using class name

let user1 =  new User('Elavarasu',23)
let user2 =  new User("Kavs",23)
let user3 =  new User("Dhruv",23)
//we can access the sttic method using class name
User.displayNumberofUSers()
user1.login()
user2.login()
user3.logout()

//inheritance --> child class ,derieved class , subclass
class Paiduser extends User{
    constructor(name,age)
    {
        super(name,age)
        this.storage = 100;
    }
    message()
    {
        console.log('you have 100Gb free space');
        return this
    }
    message2()
    {
        console.log('after 100 Gb u fill pay');
    }
   //override method 
   //this method is already hae super class 
   //we can derived alternate value using same method
   //if the method is present is child class itw ill display
   // otherwise going to super class
   login()
   {
    console.log('hey',this.name)
    console.log('Enjoy ur free space')
    return this
   }
   logout()
   {
    console.log('Thanks for your support')
    return this
   }

}
let paidUser1 = new Paiduser("Ela",23)
paidUser1.login();

let paidUser2 =  new  Paiduser("dhruv" ,27)
paidUser2.login();

//method chaining
// we can return the object where will be finally chained

paidUser1.login().message().message2();
paidUser1.logout().message();

//prototype in js
// Class in introduced in Es6 all classes have structured prototype
//whenever we create a metho it will stored in [prototype]
//without using class we can acess the prototype values

function Client(name,age){
    this.name = name;
    this.age = age;
}
Client.prototype.login = function()
{
    console.log('hy',this.name)
    console.log('you are logged in')
}
let client =  new Client('Dhruv',27)
client.login();