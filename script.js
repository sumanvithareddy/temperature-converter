// Celsius to Fahrenheit
function convertToFahrenheit() {
    let c = document.getElementById("celsius").value;

    if (c === "") {
        document.getElementById("result").innerHTML = "Please enter Celsius value";
        return;
    }

    let f = (c * 9 / 5) + 32;

    document.getElementById("result").innerHTML =
        c + "°C = " + f.toFixed(2) + "°F";
}

// Fahrenheit to Celsius
function convertToCelsius() {
    let f = document.getElementById("fahrenheit").value;

    if (f === "") {
        document.getElementById("result").innerHTML = "Please enter Fahrenheit value";
        return;
    }

    let c = (f - 32) * 5 / 9;

    document.getElementById("result").innerHTML =
        f + "°F = " + c.toFixed(2) + "°C";
}
