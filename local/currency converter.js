const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");

const fromCurr = document.querySelector(".from select");

const toCurr = document.querySelector(".to select");

const msg = document.querySelector(".msg");


// Dropdowns me currency add karna
for (let select of dropdowns) {

  for (let currCode in countryList) {

    let newOption = document.createElement("option");

    newOption.innerText = currCode;

    newOption.value = currCode;

    // Default selected currencies
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = true;
    }

    else if (select.name === "to" && currCode === "INR") {
      newOption.selected = true;
    }

    select.append(newOption);
  }

  // Flag update on change
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}


// Flag update function
const updateFlag = (element) => {

  let currCode = element.value;

  let countryCode = countryList[currCode];

  let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;

  let img = element.parentElement.querySelector("img");

  img.src = newSrc;
};


// Currency conversion function
const updateExchangeRate = async () => {

  let amount = document.querySelector(".amount input");

  let amtVal = amount.value;

  // Input validation
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  // API URL
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

  // Fetch data
  let response = await fetch(URL);

  let data = await response.json();

  // Exchange rate
  let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

  // Final converted amount
  let finalAmount = amtVal * rate;

  // Show result
  msg.innerText =
    `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
};


// Button click event
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});


// Page load pe bhi rate show ho
window.addEventListener("load", () => {
  updateExchangeRate();
});