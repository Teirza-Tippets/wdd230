// getdates for footer of home page
const currentYear = 2024;
document.querySelector('#year').textContent = currentYear;

// name for footer
const myName = 'Teirza Tippets';
document.querySelector('#name').textContent = myName;

// state or country
const myState = 'Illinois';
document.querySelector('#place').textContent = myState;

// last mmodified 

let lastModified = new Date(document.lastModified);
document.querySelector('#last-modification').textContent = lastModified;

