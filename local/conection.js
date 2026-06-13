// console.log("hello");
// alert("do you want to open this file");

// console.dir(document.body);
// console.log(document.body);

// document.body.childNodes[1].innerText="abcd";
// let header=document.getElementById("h1");
// console.dir(header);

//
// let heading=document.getElementsByClassName("heading");
// console.log(heading);
// console.dir(heading);

// let parp=document.getElementsByTagName("p");
// console.dir(parp);

//query
//  let parae=document.querySelector("p");
//  console.dir(parae);

// //qusry all 
// let para=document.querySelectorAll(".heading");
// console.dir(para);


// //inner text
// let div=document.querySelector("div");
// console.dir(div);
// let heading=document.querySelector("h1");
// console.dir(heading);

//partice
// let h2=document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText+"appna collage";



///
// let divs=document.querySelectorAll("box");
// let idx=1;
// for(div of div){
//     div.innertext=`new box ${idx}`;
//     idx++;
// }
let divs = document.querySelectorAll(".box");
let idx = 1;

for (let div of divs) {
    div.innerText = `new box ${idx}`;
    idx++;
}