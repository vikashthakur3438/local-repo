// let btnl=document.querySelector("#btnl");
// btnl.onclick=() =>{
//     console.log("btnlwas click");
//     let a=25;
//     a++
//     console.log(a);
// }
// let butt2=document.querySelector("#button2");
// butt2.ondblclick=()=>{
//     console.log("button click2");
// }
// // let butt1=document.querySelector("#button1");
// // butt1.onclick=()=>{
// //     console.log("button click1");
// //}
// let butt1=document.querySelector("#button1");
// butt1.addEventListener("click",()=>{
//     console.log("button button1 is working");
// })

// butt1.addEventListener("click",()=>{
//     console.log("button button2 is working");
// })

// const handler3 =()=>{
//     console.log("button button3 is working");
// };
// butt1.addEventListener("click",handler3);

// butt1.addEventListener("click",()=>{
//     console.log("button button4 is working");
// })
// butt1.removeEventListener("click",handler3);
// //noemola handler
// let kaku=document.querySelector("#kaku");
//  kaku.onmouseover=()=>{
//      console.log('your in inside the group');
// }

// let mode= document.querySelector("#mode");
// let body=document.querySelector("#mode");
// let curtmode="light";//dark
// mode.addEventListener("click",()=>{
//     if(curtmode=="light"){
//         curtmode="dark";
//         // document.querySelector("body").style.background="black";
//         body.classList.add("dark");
//     }else{
//         curtmode="light";
//         document.querySelector("body").style.background="white";
//         body.classList.add("light");
//     }
//     console.log(curtmode);
// })

let mode = document.querySelector("#mode");
let body = document.querySelector("body");

let curtmode = "light";

mode.addEventListener("click", () => {

    if (curtmode === "light") {

        curtmode = "dark";

        body.classList.add("dark");
        body.classList.remove("light");

    } else {

        curtmode = "light";

        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(curtmode);
});