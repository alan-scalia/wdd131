//scripts

// Hamburger Menu
const hambBtn = document.querySelector('#hamburger-button');
const nav = document.querySelector('nav');

function toggleOpen() {
    if (hambBtn.textContent !== '✖') {
        hambBtn.textContent = '✖';
    }
    else {
        hambBtn.textContent = '☰';
    }
}

hambBtn.addEventListener('click', () => {
    nav.classList.toggle('collapse');
    hambBtn.classList.toggle('open');
    toggleOpen();
});


// Footer Copyright section

const year = document.querySelector('#currentyear');
const lastmod = document.querySelector('#lastModified');

year.innerHTML = '&copy;' + new Date().getFullYear();

lastmod.innerHTML = 'Last Updated: ' + document.lastModified;
