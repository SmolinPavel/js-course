import _ from 'lodash';
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

const debouncedHandleInput = _.debounce(handleInput, 2000);
refs.input.addEventListener('input', debouncedHandleInput);

function handleInput(e) {
  const query = e.target.value;
  if (query) {
    fetch(`https://restcountries.eu/rest/v2/name/${query}`)
      .then((response) => {
        return response.json();
      })
      .then((countries) => {
        console.log(countries.length);
        const countriesHtml = countries
          .map((country) => `<h4>${country.name}</h4>`)
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
