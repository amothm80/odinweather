import { checkReponse, buildLoaders, showError } from './index.js';
 function getWeatherData() {
  const location = document.querySelector('#location-input');
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.value}?unitGroup=metric&key=ULFYVQLBQ6GTY39PCZVMKXJBC&contentType=json`;

  setTimeout(() => {
     fetch(url, {
      method: 'GET',
      headers: {},
    })
      .then((response) => {
        if (!response.ok) {
          return response.text()
        } else {
          return response.json();
        }
      })
      .then((value) => checkReponse(value))
      .catch(
        (err) => {
          showError(err)
        }
      )
  }, 2000);
}

function handleWeather(e) {
  if (e.target.id == 'submit-button') {
    e.preventDefault();
    buildLoaders();
    getWeatherData();
  }
}

export function eventHandlers() {
  document
    .querySelector('#location-form')
    .addEventListener('click', handleWeather);
}
