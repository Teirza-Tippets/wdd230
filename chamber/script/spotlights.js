const spotLightURL = 'https://teirza-tippets.github.io/wdd230/chamber/data/spotlights.json';

const cards = document.querySelector('.member-spotlights');

async function getSL() {
    const response = await fetch(spotLightURL);
    const data = await response.json();
    console.log(data);
    let dataSL = data['spotlights'];
    dataSL.forEach(displaySL);
  }

function displaySL(data) {
    //section elements list
    let div = document.createElement('div');
    let logo = document.createElement('img');
    let name = document.createElement('h2');
    let url = document.createElement('a');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let memLevel = document.createElement('h3');

    //img attributes
    logo.setAttribute('src', data.logo);
    logo.setAttribute('alt', 'logo');
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '150');

    //h2 elements
    name.textContent = `${data.name}`;

    //a element for webiste
    url.setAttribute('href', data.url);
    url.textContent = `${data.url}`;

    //p for address & phone #
    address.textContent = `${data.address}`;
    phone.textContent = `${data.phone}`;
    email.textContent = `${data.email}`;

    //h3 elements
    memLevel.textContent = `${data['membership-level']}`;

    //appending loop
    div.appendChild(logo);
    div.appendChild(name);
    div.appendChild(url);
    div.appendChild(address);
    div.appendChild(phone);
    div.appendChild(email);
    div.appendChild(memLevel);

    cards.appendChild(div);

}

getSL();