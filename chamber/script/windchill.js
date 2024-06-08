// calculation of windchill
document.addEventListener("DOMContentLoaded", function() {
    const temperatureElement = document.getElementById("temperature");
    const windspeedElement = document.getElementById("windspeed");
    const windchillElement = document.getElementById("windchill");

    const temperature = parseFloat(temperatureElement.textContent);
    const windspeed = parseFloat(windspeedElement.textContent);

    function calculateWindChill(temp, speed) {
        // Wind chill calculation formula
        return 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    }

    if (temperature <= 50 && windspeed > 3.0) {
        const windChill = calculateWindChill(temperature, windspeed);
        windchillElement.textContent = windChill.toFixed(1) + "°F";
    } else {
        windchillElement.textContent = "N/A";
    }
});