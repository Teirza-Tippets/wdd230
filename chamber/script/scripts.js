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


// banner announcement
document.querySelector(".banner__close").addEventListener("click", function () {
	this.closest(".banner").style.display = "none";
  });

document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElement(".banner");
    const daysToShowBanner = [1, 2, 3];
    const currentDay = new Date().getDay();
    
    if (daysToShowBanner.includes(currentDay)) {
        banner.style.display = "block";
    }
});
