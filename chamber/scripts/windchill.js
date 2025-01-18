function calculateWindChill(temperature, windSpeed) {
    // Check if the temperature and wind speed  are valid
    if (temperature > 50 || windSpeed < 3) {
        // return "Invalid input. Temperature should be less than or equal to 50 °F and wind speed should be greater than 3 mph.";
        return "N/A";
    }
    // Calculate wind chill factor
    var windChillFactor = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return windChillFactor.toFixed(1)+ `&deg;F`;
}

// Testing:
var temperature = 34; // Temperature in Fahrenheit
var windSpeed = 20; // Wind speed in mph
var windChill = calculateWindChill(temperature, windSpeed);
console.log("Wind Chill Factor: " + windChill);

document.getElementById("temp").innerHTML = temperature;
document.getElementById("wind-speed").innerHTML = windSpeed;
document.getElementById("wind-chill").innerHTML = windChill;