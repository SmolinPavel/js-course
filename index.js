import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

const refs = {
  input: document.getElementById('input-id'),
  countriesList: document.getElementById('countries'),
};

refs.input.addEventListener('input', handleInput);

function handleInput(e) {
  const query = e.target.value;
  if (query) {
    fetch(`https://restcountries.eu/rest/v2/name/${query}`)
      .then((response) => {
        return response.json();
      })
      .then((countries) => {
        const countriesHtml = countries
          .map((country) => `<h6>${country.name}</h6>`)
          .join('');

        alert({
          type: 'notice',
          text: 'Hello JS #34!',
        });

        refs.countriesList.insertAdjacentHTML('afterbegin', countriesHtml);
      })
      .catch(console.error);
  }
}
