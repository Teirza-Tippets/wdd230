const rentalURL = 'https://teirza-tippets.github.io/wdd230/scoots/data/rentals.json';
const cards = document.querySelector('#cards');

async function getRentals() {
    const response = await fetch(rentalURL);
    const data = await response.json();
    console.log(data);
    let dataRent = data['rentals'];
    dataRent.forEach(displayRent);
  }

function displayRent(data) {
    //section elements list
    let div = document.createElement('div');
    let image = document.createElement('img');
    let type = document.createElement('h2');
    let reserve = document.createElement('h4');
    let walkIn = document.createElement('h4');
    let numPersons = document.createElement('p');


    //img attributes
    image.setAttribute('src', data.img);
    image.setAttribute('alt', 'rental vehicle');
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '150');

    //h2 elements
    type.textContent = `${data.type}`;


    //p max persons
    numPersons.textContent = `${data.maxPersons}`;
   

    //h4 elements
    reserve.textContent = `Reservations:  Half Day - ${data.reservation[1]} - Full Day - ${data.reservation[2]} `;
    walkIn.textContent = `Walk-Ins:  Half Day - ${data['halfDay']} - Full Day - ${data.walkIN[2]} `;


    //appending loop
    div.appendChild(image);
    div.appendChild(type);
    div.appendChild(numPersons);
    div.appendChild(reserve);
    div.appendChild(walkIn);

    cards.appendChild(div);

}

getRentals();