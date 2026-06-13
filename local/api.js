// // const url ="https://cat-fact.herokuapp.com/facts";
// // let promise=fetch(url);
// // console.log(promise);
// const url = "https://catfact.ninja/fact";

// async function getFact() {
// //   try {
//     let response = await fetch(url);
//     let data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// getFact();
// const URL = "https://catfact.ninja/fact";

// const getFact=async()=>{
//     console.log("getting data......")
//     let response=await fetch(URL)
//     console.log(response);
//     let data=await response.json();
//     console.log(data);
// }
const URL = "https://catfact.ninja/fact";

let facts = document.querySelector("#fact");

const butn = document.querySelector("#butn");

const getFact = async () => {
    console.log("getting data......");

    let response = await fetch(URL);

    let data = await response.json();

    facts.innerHTML = data.fact;
};

butn.addEventListener("click", getFact);

getFact();