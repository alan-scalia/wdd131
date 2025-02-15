// Footer - Last Modified
const year = document.querySelector('#currentyear');
const lastmod = document.querySelector('#lastModified');

year.innerHTML = '&copy;' + new Date().getFullYear();

lastmod.innerHTML = 'Last Updated: ' + document.lastModified;


// Array of Products
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


// Products select implementation

function getProducts(products) {
    const select = document.querySelector('#product-name');

    products.forEach((product) => { const newOption = document.createElement('option'); select.appendChild(newOption).innerHTML = `<option value="${product.id}">${product.name.charAt(0).toUpperCase() + product.name.slice(1)}</option>`; })
}

if (document.querySelector('#product-name')) {
    getProducts(products);
}

// Review counter

function reviewCount() {
    const postButton = document.querySelector('#post');
    const rCounter = document.querySelector('#review-counter');
    let reviewsStored = Number(localStorage.getItem('reviewCounter'));


    console.log('reviews: ' + reviewsStored);

    if (reviewsStored !== 0) {
        rCounter.innerHTML = reviewsStored;
    }
    else {
        rCounter.textContent = 'This is your first review!';
    }

    reviewsStored++
    Number(localStorage.setItem('reviewCounter', reviewsStored));

    console.log(reviewsStored);
}

if (document.querySelector('#confirmation')) {
    reviewCount();
}