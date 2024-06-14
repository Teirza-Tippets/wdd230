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
const calendar = document.querySelector('.calendar');
const attractions = document.querySelector('.attractions');
const photos = document.querySelector('.local-photos');


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
		attractions.style.background = '#3A3C44';
		attractions.style.color = '#fff';
		calendar.style.background = '#3A3C44';
		calendar.style.color = '#fff';
		photos.style.background = '#3A3C44';
		photos.style.color = '#fff';
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
		attractions.style.background = '#3C6E71';
		attractions.style.color = '#fff';
		calendar.style.background = '#3C6E71';
		calendar.style.color = '#fff';
		photos.style.background = '#3C6E71';
		photos.style.color = '#fff';
		memberSpotlights.style.background = '#3C6E71';
		memberSpotlights.style.color = '#fff';
		modeButton.textContent = '🕶️';
	}
});


//page visit counter
// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.