function displayMessage(message) {
    document.getElementById('hello').innerText = message;
}

// Get the current date and time
const now = new Date();
const nowTime = now.getTime();

// Get the last visit date from localStorage
const lastVisitTime = localStorage.getItem('lastVisitTime');

if (lastVisitTime) {
    const lastVisitDate = new Date(parseInt(lastVisitTime));
    const timeDiff = nowTime - lastVisitDate.getTime();
    const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (timeDiff < 24 * 60 * 60 * 1000) {
        displayMessage('Back so soon! Awesome!');
    } else if (dayDiff === 1) {
        displayMessage('You last visited 1 day ago.');
    } else {
        displayMessage(`You last visited ${dayDiff} days ago.`);
    }
} else {
    displayMessage('Welcome! Let us know if you have any questions.');
}

// Store the current date and time in localStorage for the next visit
localStorage.setItem('lastVisitTime', nowTime.toString());