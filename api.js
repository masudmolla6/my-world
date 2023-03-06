const loadCountries = async (searchText) => {
    const url = `https://restcountries.com/v3.1/name/${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayCountry(data);
}
const displayCountry = (countries) => {
    console.log(countries);
    const allCountries = document.getElementById('countries');
    allCountries.innerHTML = ``;
    countries.forEach(country => {
        console.log(country.capital);
        const CountryDiv = document.createElement('div');
        CountryDiv.classList.add('col');
        CountryDiv.innerHTML = `
        <div class="card h-50">
            <img src="${country.flags.png}" class="card-img-top h-100" alt="...">
            <div class="card-body">
                <h5 class="card-title">${country.name.common}</h5>
                <p class="card-text">${country.capital}</p>
            </div>
        </div>
        `;
        allCountries.appendChild(CountryDiv);
    });
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadCountries(searchText);

})

