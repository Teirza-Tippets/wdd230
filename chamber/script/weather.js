// Select all of the HTML elements that will need to be manipulated and assign them to const variables.
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#desc');


// Declare a const variable named "url" and assign it a valid URL string as given in the openweathermap api documentation.
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.55&lon=126.93&units=imperial&appid=9db907be846a0b11f022ac79c8c1fb2a'

// Define an asynchronous function named "apiFetch()" that uses a try block to handle errors.
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          displayResults(data);
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
    }

//Build the displayResults function to output to the given HTML document.
function displayResults(data) { 
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'Weather Icon');

    let numData = `${data.main.temp}`;
    let numDecimals = parseFloat(numData).toFixed(0);
    currentTemp.textContent = numDecimals + '°F.';
    
    let desc = data.weather[0].description;
    captionDesc.textContent = `${desc}`;
    
}

apiFetch();

// three day forecast

const forecast = document.querySelector('#foreData');
const foreURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=37.55&lon=126.93&units=imperial&appid=9db907be846a0b11f022ac79c8c1fb2a';

async function forecastFetch() {
    try {
        const response = await fetch(foreURL);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          displayResults(data);
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
    }

forecastFetch();