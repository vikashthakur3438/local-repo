//async await data and waitcall
// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("hello")
// },9000);
// console.log("four");
// console.log("five");
// console.log("six");

//callback//
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }
// calculator(1,2,(a,b)=>{
//      console.log(a+b);
// })
// const hello=()=>{
//     console.log("hello");
// };
// setTimeout(hello,7000); callback with setTime;


//callbackhell
// function getdata(dataid,getnextdata){
//     //set time
//     setTimeout(()=>{
//         console.log("data",dataid);
//         if(getnextdata){
//             getnextdata();
//         } 
//     },4000);
// }
// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3);
//     })
// })

//promise
// let promise=new Promise((resolve, reject) => {
//     console.log("my promise");
//     resolve("some error");
// // });
// function getdata(dataid,getnextdata){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data",dataid);
//             resolve("succes fulliy");
//             if(getnextdata){
//                 getnextdata();
//             }
//         },7000);
//     }) 
// }

//const
// const getpromise=()=>{
//     return new Promise((resolve, reject) => {
//         console.log("iam promise");
//         reject("your data in not found"); 
//     })
// }
// let promise=getpromise();
// promise.then((res)=>{
//     console.log("promise fullfiled",res); 
// })
// promise.catch((err)=>{
//     console.log("rejected",err)
// })
//



//chain
// function asyncfnc(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("some detal");
//         },4000)
//     })
// // }
// // console.log("feahting data1..");
// // let p1 =asyncfnc();
// // p1.then((res)=>{
// //     console.log(res);
// // });

// // function asyncfnc1(){
// //     return new Promise((resolve, reject) => {
// //         setTimeout(()=>{
// //             console.log("some detal");
// //             resolve("success");
// //         },4000)
// //     })
// // }
// // function asyncfnc2(){
// //     return new Promise((resolve, reject) => {
// //         setTimeout(()=>{
// //             console.log("some deta2");
// //             resolve("succes");
// //         },4000)
// //     })
// // }
// // console.log("feahting data1..");
// // let p1 =asyncfnc1();
// // p1.then((res)=>{
// //     console.log("feahting data2..");
// //     let p2 =asyncfnc2();
// //     p2.then((res)=>{});
// // });


// function getdata(dataid) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataid);
//             resolve("success");
//         }, 4000);
//     });
// }

// getdata(1)
// .then((res) => {
//     console.log(res);
//     return getdata(2);
// })
// .then((res) => {
//     console.log(res);
//     return getdata(3);
// })
// .then((res)=>{
//     console.log(res);
//     return getdata(4);
// })
// .then((res)=>{
//     console.log("succes fully");
// })

//async 
// async function hello() {
//     console.log("hello");
// }

///async wait
function Api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather");
            resolve(200);
        }, 2000);
    });
}

async function getwheaterdata() {
    await Api(1);
    await Api(2);
    await Api(3);
    await Api(4);
    await Api(5);
    await Api(6);
    await Api(7);
}

getwheaterdata();