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

// let lastModified = new Date(document.lastModified);
// document.querySelector('#last-modification').textContent = lastModified;

let text = document.lastModified;
document.querySelector('#last-modification').innerHTML = text;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


//light and dark mode 

const modeButton = document.querySelector('#mode');
const body = document.querySelector('body');
const header = document.querySelector('header');
const navi = document.querySelector('nav');
const footer = document.querySelector('footer');
const infoBoard = document.querySelector('.info-board');
const events = document.querySelector('.events');
const weather = document.querySelector('.weather');
const memberSpotlights = document.querySelector('.member-spotlights');

modeButton.addEventListener('click', () => {
	if (modeButton.textContent.includes('🕶️')) {
		body.style.background = '#000';
		body.style.color = '#fff';
		header.style.background = '#23252D';
		header.style.color = '#fff';
		navi.style.background = '#23252D';
		navi.style.color = '#fff';
		footer.style.background = '#23252D';
		footer.style.color = '#fff';
		events.style.background = '#3A3C44';
		events.style.color = '#fff';
		weather.style.background = '#3A3C44';
		weather.style.color = '#fff';
		memberSpotlights.style.background = '#3A3C44';
		memberSpotlights.style.color = '#fff';
		modeButton.textContent = '🔆';
	} else {
		body.style.background = '#eee';
		body.style.color = '#fff';
		header.style.background = '#284B63';
		header.style.color = '#fff';
		navi.style.background = '#284B63';
		navi.style.color = '#fff';
		footer.style.background = '#284B63';
		footer.style.color = '#fff';
		events.style.background = '#3C6E71';
		events.style.color = '#fff';
		weather.style.background = '#3C6E71';
		weather.style.color = '#fff';
		memberSpotlights.style.background = '#3C6E71';
		memberSpotlights.style.color = '#fff';
		modeButton.textContent = '🕶️';
	}
});