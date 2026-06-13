///protype ka liya object create kar na ka liya


// const employee={
//     calctax(){
//         console.log("tax rate is 10%");
//     },
// };
// const karanArjun1 ={
//     salary:5000,
// };
// const karanArjun2 ={
//     salary:5000,
// };
// const karanArjun3 ={
//     salary:5000,
// };
// const karanArjun4 ={
//     salary:5000,
// };
// const karanArjun5 ={
//     salary:5000,
// };
// karanArjun1.__proto__=employee;
// karanArjun2.__proto__=employee;
// karanArjun3.__proto__=employee;
// karanArjun4.__proto__=employee;
// karanArjun5.__proto__=employee;

//class

// class toyotacar{
//     constructor(brand,mileage){
//         console.log("cerating new object");
//         this.brand= brand;
//         this.milage=mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
    
// }
// let fortuner=new toyotacar("fortuner",10);
// console.log(fortuner);
// let tata=new toyotacar("tata",20);
// console.log(tata);


//inhertance
// class person{
//    constructor(){
//     this.specics="home sapiens";
//    } 
//     run(){
//         console.log("run");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     eat(){
//         console.log("eat");
//     }
//     work(){
//         console.log("work is nothing");
//     }        
// }
// class engineer extends person{
//     work(){
//         console.log("solve problems,bulid something");
//     }
// }
// class doctor extends person{
//     work(){
//         console.log("solve problems,bulid something");
//     }
// }


// //super keyboard
// class person{
//    constructor(){
//     console.log("enter the parent constructor");
//     this.specics="home sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
// }
// class engineer extends person{
//     constructor(branch){
//         console.log("enter the child constructor");
//         super();
//         this.branch=branch;
//         console.log("exit child constructor");
//     }
//     work(){
//         console.log("solve problems,bulid something");
//     }
// }
// let engg=new engineer("computer engg");

// //partice//
// let data = "secret information";

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("data =", data);
//     }
// }

// class Admin extends User {
//     constructor(name, email) {
//         super(name, email);
//     }

//     editData() {
//         data = "some new data";
//     }
// }

// let student1 = new User("vikash", "vikashthakur3438@gmail.com");
// let student2 = new User("aman", "amanthakur5657@gmail.com");
// let teacher = new User("neha", "nehacollege@gmail.com");

// let admin1 = new Admin("admin", "admincollege@gmail.com");

//log
// let a=5;
// let b=10
// console.log("a",a);
// console.log("b",b);
// console.log("a+b",a+b);
// try{
// console.log("a+b",a+c);
// }catch(err){
//     console.log(err);
// }

// console.log("a+b",a+b);