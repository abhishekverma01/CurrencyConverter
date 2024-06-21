import "./Code.js";

const api_key = "1709412628e73604686aac49";

const url = `https://v6.exchangerate-api.com/v6/${api_key}/pair/USD/INR`;

// console.log("hi");

const selectElements = document.querySelectorAll("select");
// console.log(selectElements);
selectElements.forEach(selectElement => {
    console.log("loop inside")
    selectElement.addEventListener('change', (event) => {
        console.log('Select value changed to:', event.target.value);
    });
    console.log("loop out")
});

// console.log("hi");