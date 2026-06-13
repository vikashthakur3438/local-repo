// let  btnl=document.querySelector("#btnl");
// // btnl.onclick=()=>{
// //     console.log("btnl was clicked");
// //     console.log(btnl.ATTRIBUTE_NODE.clientX,clienty);
// btnl.addEventListener("click",(evt)=>{
//     console.log("button was clicked - header 1 ");
// });
// btnl.addEventListener("click",(evt)=>{
//     console.log("button was clicked - header 2 ");
// });
// const header3=()=>{
//     console.log("button was clicked - header 3");
// };
// btnl.addEventListener("click",header3);
// btnl.addEventListener("click",(evt)=>{
//     console.log("button was clicked -header 4 ");
// });
// btnl.addEventListener("click",(evt)=>{
//     console.log("button was clicked -header 5 ");
// });
// let box=document.querySelector("#box");
// box.onmouseover=()=>{
//     console.log("your in my box - header");
// };
// btnl.removeEventListener("click",header3);
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
});