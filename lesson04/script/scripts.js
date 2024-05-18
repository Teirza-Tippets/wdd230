// getdates for footer of home page
const currentYear = 2024;
document.querySelector('#year').textContent = currentYear;

// name for footer
const myName = 'Teirza Tippets';
document.querySelector('#name').textContent = myName;

// state or country
const myProject = 'Chamber of Commerce';
document.querySelector('#project').textContent = myProject;

// last mmodified 

let lastModified = new Date(document.lastModified);
document.querySelector('#last-modification').textContent = lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
