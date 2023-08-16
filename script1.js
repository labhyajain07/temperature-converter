const convertButton = document.getElementById("convertButton");
const inputTemperature = document.getElementById("inputTemperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convertedTemperature = document.getElementById("convertedTemperature");

convertButton.addEventListener("click", () => {
    const inputTemp = parseFloat(inputTemperature.value);

    if (isNaN(inputTemp)) {
        alert("Please enter a valid temperature.");
        return;
    }

    const from = fromUnit.value;
    const to = toUnit.value;

    if (from === to) {
        convertedTemperature.textContent = inputTemp.toFixed(2);
        return;
    }

    let convertedTemp;

    switch (from) {
        case "celsius":
            convertedTemp = celsiusTo(inputTemp, to);
            break;
        case "fahrenheit":
            convertedTemp = fahrenheitTo(inputTemp, to);
            break;
        case "kelvin":
            convertedTemp = kelvinTo(inputTemp, to);
            break;
        default:
            break;
    }

    convertedTemperature.textContent = convertedTemp.toFixed(2);
});

function celsiusTo(temp, toUnit) {
    if (toUnit === "fahrenheit") {
        return (temp * 9/5) + 32;
    } else if (toUnit === "kelvin") {
        return temp + 273.15;
    }
    return temp;
}

function fahrenheitTo(temp, toUnit) {
    if (toUnit === "celsius") {
        return (temp - 32) * 5/9;
    } else if (toUnit === "kelvin") {
        return (temp + 459.67) * 5/9;
    }
    return temp;
}

function kelvinTo(temp, toUnit) {
    if (toUnit === "celsius") {
        return temp - 273.15;
    } else if (toUnit === "fahrenheit") {
        return (temp * 9/5) - 459.67;
    }
    return temp;
}
