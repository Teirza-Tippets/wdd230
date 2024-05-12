// getdates for footer of home page
const currentYear = 2024;
document.querySelector('#year').textContent = currentYear;

// name for footer
const myName = 'Teirza Tippets';
document.querySelector('#name').textContent = myName;

// state or country
const myProject = 'WDD 230';
document.querySelector('#project').textContent = myProject;

// last mmodified 

let lastModified = new Date(document.lastModified);
document.querySelector('#last-modification').textContent = lastModified;



// // Function to fetch weather data
// async function getWeather() {
//     const apiKey = '93b33a5f1f4eaed52ff9ba11727b7bcf'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
//     const city = 'Seoul';
//     const country = 'KR';
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${apiKey}`;

//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log('Error fetching weather data:', error);
//     }
// }

// // Function to display weather forecast
// function displayWeather() {
//     getWeather().then(data => {
//         const cityName = data.name;
//         const temperature = data.main.temp;
//         const description = data.weather[0].description;

//         const weatherInfoSpan = document.getElementById('weather-info');
//         weatherInfoSpan.textContent = `Weather forecast for ${cityName}: ${description}, Temperature: ${temperature}°C`;
//     });
// }

// // Call the displayWeather function to show the weather forecast
// displayWeather();


// //responsive menu
// const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation');

// hamButton.addEventListener('click', () => {
// 	navigation.classList.toggle('open');
// 	hamButton.classList.toggle('open');
// });