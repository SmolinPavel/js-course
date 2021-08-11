const refs = {
  input: document.getElementById('input-id'),
  countriesList: document.getElementById('countries'),
};

refs.input.addEventListener('input', handleSearch);

function handleSearch(e) {
  const query = e.target.value;
  if (query) {
    fetch(`https://restcountries.eu/rest/v2/name/${query}`)
      .then((response) => {
        return response.json();
      })
      .then((countries) => {
        const countriesHtml = countries
          .map((country) => `<h1>${country.name}</h1>`)
          .join('');

        refs.countriesList.insertAdjacentHTML('afterbegin', countriesHtml);
      })
      .catch(console.error);
  }
}
