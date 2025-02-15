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