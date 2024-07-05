const card = document.querySelector('#cards');
const toggleButton = document.querySelector('#toggleView');
const memberURL = 'https://teirza-tippets.github.io/wdd230/chamber/data/members.json';

toggleButton.addEventListener('click', () => {
    card.classList.toggle('list-view');
});

async function getMem() {
    const response = await fetch(memberURL);
    const data = await response.json();
    console.log(data);
    let dataMem = data['members'];
    dataMem.forEach(displayMem);
}

function displayMem(data) {
    // section elements list
    let section = document.createElement('section');
    let logo = document.createElement('img');
    let details = document.createElement('div');
    let name = document.createElement('h2');
    let url = document.createElement('a');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let memLevel = document.createElement('h3');

    // img attributes
    logo.setAttribute('src', data.logo);
    logo.setAttribute('alt', 'logo');
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '150');

    // details div class
    details.classList.add('details');

    // h2 elements
    name.textContent = `${data.name}`;

    // a element for website
    url.setAttribute('href', data.url);
    url.textContent = `${data.url}`;

    // p for address & phone #
    address.textContent = `${data.address}`;
    phone.textContent = `${data.phone}`;
    email.textContent = `${data.email}`;

    // h3 elements
    memLevel.textContent = `${data['membership-level']}`;

    // appending loop
    details.appendChild(name);
    details.appendChild(url);
    details.appendChild(address);
    details.appendChild(phone);
    details.appendChild(email);
    details.appendChild(memLevel);

    section.appendChild(logo);
    section.appendChild(details);

    card.appendChild(section);
}

getMem();
