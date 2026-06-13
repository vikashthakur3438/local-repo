 // let div=document.querySelector("div");
// console.log(div);
// let art=div.getAttribute("id");
// console.log(art);
// let clas = document.querySelector("p");
// console.log(clas);
// let artt=clas.getAttribute("class");
// console.log(artt);

//charge kar ho attribute ka name 
// let para = document.querySelector("p");
// para.setAttribute("class", "newclass");
// console.log(para);
// para.setAttribute("class","newlock");
// console.log(para);
// console.dir(para);


//style ko asces kar na 
// let div=document.querySelector("div");
// div.style.backgroundColor="yellow";
// div.style.color="black";
// div.style.margin=0;
// div.style.fontSize=10;

//jss ma koi bhi button ayya paragrph append kar na ho
//button end ma chahiya to append ka use karo

// let atbtu = document.createElement("button");
// console.log(atbtu);

// let div = document.querySelector("div");

// atbtu.innerText = "Click Me";
// atbtu.style.fontSize = "50px";

// div.append(atbtu);


//button starting ma chahiye to prepard
// let atbtu = document.createElement("button");
// console.log(atbtu);

// let div = document.querySelector("div");

// atbtu.innerText = "Click Me";
// atbtu.style.fontSize = "50px";

// div.prepend(atbtu);


//buttom start sa phela chahiye to div ko before;
// let atbtu = document.createElement("button");
// console.log(atbtu);

// let div = document.querySelector("div");

// atbtu.innerText = "Click Me";
// atbtu.style.fontSize = "50px";

// div.before(atbtu);


// //button end ma cahiaya to div ko after 
// let atbu=document.createElement("button");
// console.log(atbu);
// let div =document.querySelector("div");
// atbu.innerText="click me";
// atbu.style.fontSize="50px";
// div.after(atbu);
// let para=document.querySelector("p");
// para.remove();

///partice
let btut=document.createElement("button");
console.log(btut);
let div=document.querySelector("div");
div.prepend(btut);
btut.innerText="click me!";
btut.style.fontSize="50px";
btut.style.color="white";
btut.style.backgroundColor="red";
console.log(btut);


// partice 2
let content=document.createElement("p");
console.log(content);
content.innerText="vikash is good boy";
let para=document.querySelector("p");
para.append(content);
console.log(para); 

