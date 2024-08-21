let userInput = document.querySelectorAll(".temp-input")[0];
let userTemp = document.querySelectorAll(".temp-units-input")[0];
let convertTemp = document.querySelectorAll(".temp-units-output")[0];
let result = "";
let OutputContainer = document.querySelectorAll(".output-container")[0];

function tempConverter() {
    let inputVal = parseFloat(userInput.value);
    if (userTemp.value === "celsius" && convertTemp.value === "fahrenheit") {
        result = (inputVal * 9 / 5) + 32;
    } else if (userTemp.value === "celsius" && convertTemp.value === "kelvin") {
        result = inputVal + 273.15;
    } else if (userTemp.value === "fahrenheit" && convertTemp.value === "celsius") {
        result = (inputVal - 32) * 5 / 9;
    } else if (userTemp.value === "fahrenheit" && convertTemp.value === "kelvin") {
        result = ((inputVal - 32) * 5 / 9) + 273.15;
    } else if (userTemp.value === "kelvin" && convertTemp.value === "celsius") {
        result = inputVal - 273.15;
    } else if (userTemp.value === "kelvin" && convertTemp.value === "fahrenheit") {
        result = ((inputVal - 273.15) * 9 / 5) + 32;
    }
    else { result = inputVal }

    OutputContainer.innerHTML = `The Temperature is ${result} &deg`

}



