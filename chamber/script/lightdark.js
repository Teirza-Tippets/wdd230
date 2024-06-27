//light and dark mode 

const modeButton = document.querySelector('#mode');
const body = document.querySelector('body');
const header = document.querySelector('header');
const nav = document.querySelector('.navigation');
const main = document.querySelector('main');
const footer = document.querySelector('footer');


modeButton.addEventListener('click', () => {
	if (modeButton.textContent.includes('🕶️')) {
        body.style.background = '#3F4045';
        body.style.color = '#353535';
        header.style.background = '#02111B';
        header.style.color = '#FFFFFF';
        nav.style.background = '#02111B';
        nav.style.color = '#FFFFFF';
        main.style.background = '#3F4045';
        footer.style.background = '#02111B';

		
		modeButton.textContent = '🔆';
	} else {
        body.style.background = '#FFFFFF';
        body.style.color = '#FFFFFF';
        header.style.background = '#284B63';
        header.style.color = '#FFFFFF';
        nav.style.background = '#284B63';
        nav.style.color = '#FFFFFF';
        main.style.background = '#D9D9D9';
        footer.style.background = '#284B63';
		modeButton.textContent = '🕶️';
	}
});


//#003d5c

// --primary-color: #FFFFFF ;
// --secondary-color: #284B63 ;
// --accent1-color: #353535;
// --accent2-color: #3C6E71;
// --accent3-color: #D9D9D9;

// #02111B
// #3F4045
// #30292F
// #5D737E
// #FFFFFF