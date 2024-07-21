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
        header.style.background = '#124559';
        header.style.color = '#eff6e0';
        nav.style.background = '#124559';
        nav.style.color = '#eff6e0';
        main.style.background = '#eff6e0';
        main.style.color = '#353535';
        footer.style.background = '#124559';
        footer.style.color = '#eff6e0';
		modeButton.textContent = '🕶️';
	}
});