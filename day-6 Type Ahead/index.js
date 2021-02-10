 let search = document.getElementById('search');
 let suggestion = document.getElementById('suggestion');


const endPoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endPoint)
.then(res => res.json())
.then(data=> cities.push(...data) )
.catch(error => console.log(error));

console.log (cities);

function filterCities(enteredChar) {
        enteredChar = enteredChar.toLowerCase();
         return cities.filter(place =>{
             return place.city.toLowerCase().includes(enteredChar) || place.state.toLowerCase().includes(enteredChar) ;
         })
    }
function displayData(e) {
        let filteredItems =filterCities(this.value);
        // console.log(filterItems);
let html = filteredItems.map(place=>  
        {
             return `<li><span> ${place.city} ${place.state} <span><span>${place.population}</span></li>`
        }).join('');     
        console.log(html)
        suggestion.innerHTML= html;
}
search.addEventListener('change',displayData);
search.addEventListener('keyup',displayData);

