const year = document.querySelector('#currentyear');
let lastmod = document.querySelector('#lastModified');

year.innerHTML = '&copy;' + new Date().getFullYear() + ' - ';

lastmod.innerHTML = '&#183; Last Updated: ' + document.lastModified;

