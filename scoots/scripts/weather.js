// Select all of the HTML elements that will need to be manipulated and assign them to const variables.
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#desc');


// Declare a const variable named "url" and assign it a valid URL string as given in the openweathermap api documentation.
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.5&lon=-86.95&units=imperial&appid=9db907be846a0b11f022ac79c8c1fb2a'

//banner high temp
//banner high temp
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

  let numData = `${data.main.temp}`;
  let numDecimals = parseFloat(numData).toFixed(0);
  currentTemp.textContent = numDecimals + '°F.';
  
}



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

const foreDiv = document.querySelector('#foreData');
const foreURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.5&lon=-86.95&units=imperial&appid=9db907be846a0b11f022ac79c8c1fb2a';

async function forecastFetch() {
    try {
        const response = await fetch(foreURL);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          displayForecast(data);
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
    }


const displayForecast = (data) => {

  for (let aNum=0; aNum<25; aNum=aNum+8) {
    if (aNum < 25) {

      let div = document.createElement('div');
      let tempDate = document.createElement('h3');
      let fTemp = document.createElement('p');

      fullDate = `${data.list[aNum].dt_txt}`;
      tempDate.textContent = fullDate.substring(5,10);
      fTemp.textContent = `${data.list[aNum].main.temp}°F`;

      div.appendChild(tempDate);
      div.appendChild(fTemp);
      foreDiv.appendChild(div);
    }
  }
}

forecastFetch();