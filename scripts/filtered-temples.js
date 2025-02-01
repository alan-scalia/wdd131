const nav = document.querySelector('#nav');
const button = document.querySelector('#menu')

button.addEventListener('click', () => {
    nav.classList.toggle('open');
    button.classList.toggle('open');
})

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 12",
        area: 41010,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
    },
    {
        templeName: "Manaus Brazil",
        location: "Manaus, Brazil",
        dedicated: "2012, June, 10",
        area: 32032,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manaus-brazil/400x250/lds-temple-manaus-brazil-1085299-wallpaper.jpg"
    },
    {
        templeName: "Cordoba Argentina",
        location: "Cordoba, Argentina",
        dedicated: "2015, May, 17",
        area: 34369,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/400x250/cordoba-argentina-temples-buildings-1436934-wallpaper.jpg"
    },
];
/* Respond to the main navigation menu items by filtering and displaying the temples as follows:
Old - temples built before 1900
New - temples built after 2000
Large - temples larger than 90000 square feet
Small - temples smaller than 10000 square feet
Home - displays all the temples stored in the array.*/

function filterTemples(temples, filterCategory) {
    let templesFiltered;
    document.querySelector('#cards-container').innerHTML = '';
    switch (filterCategory) {
        case 'old':
            templesFiltered = temples.filter((temple) => {
                let age = temple.dedicated.split(', ');
                return parseInt(age[0]) < 1900;
            });
            break;
        case 'new':
            templesFiltered = temples.filter((temple) => {
                let age = temple.dedicated.split(', ');
                return parseInt(age[0]) > 2000;
            });
            break;
        case 'large':
            templesFiltered = temples.filter((temple) => { return temple.area > 90000 });
            break;
        case 'small':
            templesFiltered = temples.filter((temple) => { return temple.area < 10000 });
            break;
        case 'home':
            templesFiltered = temples;
            break;
        default:
            templesFiltered = temples;
            console.log('WRONG CATEGORY TO FILTER');
            break;
    }
    
    templesFiltered.map((temple) => { createCard(temple); });
}

const home = document.querySelector('#home');
const old = document.querySelector('#old');
const newButton = document.querySelector('#new');
const small = document.querySelector('#small');
const large = document.querySelector('#large');

home.addEventListener('click', () => { filterTemples(temples, 'home') });
old.addEventListener('click', () => { filterTemples(temples, 'old') });
newButton.addEventListener('click', () => { filterTemples(temples, 'new') });
small.addEventListener('click', () => { filterTemples(temples, 'small') });
large.addEventListener('click', () => { filterTemples(temples, 'large') });


function createCard(objTemple) {
    const container = document.querySelector('#cards-container');
    const card = document.createElement('div');
    const title = document.createElement('h3');
    const image = document.createElement('img');
    const ul = document.createElement('ul');
    const values = ['location', 'dedicated', 'area'];

    //card
    container.appendChild(card);
    card.classList.add('card');

    //title
    title.innerHTML = `${objTemple.templeName}`;
    card.appendChild(title);

    //img
    image["src"] = `${objTemple.imageUrl}`;
    image["alt"] = `Picture of ${objTemple.templeName} Temple`;
    image["loading"] = 'lazy';
    image["width"] = '400';
    image["height"] = '250';
    card.appendChild(image);

    //info - parse the info values and insert them into an unordered list.
    card.appendChild(ul);
    values.forEach((value) => {
        const li = document.createElement('li');
        li.innerHTML = `${value[0].toUpperCase()}${value.slice(1)}: ${objTemple[value]}`;
        ul.appendChild(li);
    })
}

temples.map((temple) => { createCard(temple); });