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
        
let html = filteredItems.map(place=>  
        {
                let regex = new RegExp(this.value,'gi');
                let cityName= place.city.replace(regex,`<span class='hl'>${this.value}</span>`)
                let stateName= place.state.replace(regex,`<span class='hl'>${this.value}</span>`)
                return `<li><span class='name'> ${cityName} ${stateName} </span><span class='population'>${place.population}</span></li>`
        }).join('');     
        suggestion.innerHTML= html;
}
search.addEventListener('change',displayData);
search.addEventListener('keyup',displayData);

