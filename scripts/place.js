// Footer - Last Modified
const year = document.querySelector('#currentyear');
const lastmod = document.querySelector('#lastModified');

year.innerHTML = '&copy;' + new Date().getFullYear();

lastmod.innerHTML = 'Last Updated: ' + document.lastModified;


// Weather data calculations.

// static temperature and wind speed:
const temperature = 30;
const windSpeed = 20;

// select the HTML elements to modify:
const tempList = document.querySelector('#temperature');
const windSpeedList = document.querySelector('#wind-speed');
const windChill = document.querySelector('#wind-chill');

// insert the formatted content into the li element:
tempList.textContent = temperature + ' °C';
windSpeedList.textContent = windSpeed + ' km/h';

// Calculate Wind Chill function:
const calculateWindChill = function (temperature, windSpeed) {
    return (13.12 + (0.6215 * temperature) - (11.37 * (Math.pow(windSpeed, 0.16))) + (0.3965 * temperature * Math.pow(windSpeed, 0.16)));
}

// Execute the function and insert the return into the li element if requirements are met.
if (temperature <= 10 && windSpeed > 4.8)
    windChill.textContent = calculateWindChill(10, 5).toFixed(1) + ' km/h'
else
    windChill.textContent = 'N/A';