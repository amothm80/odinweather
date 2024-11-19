import { populateValues } from './index.js';
function getWeatherData() {
  const location = document.querySelector('#location-input');
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.value}?unitGroup=metric&key=ULFYVQLBQ6GTY39PCZVMKXJBC&contentType=json`;
  fetch(url, {
    method: 'GET',
    headers: {},
  })
    .then((response) => {
      if (!response.ok) {
        throw response.text();
      } else {
        return response.json();
      }
    }).then((value)=>populateValues(value))
    .catch((err) => {
      return err;
    })
}

function handleWeather(e) {
  if (e.target.id == 'submit-button') {
    e.preventDefault();
    getWeatherData()
  }
}

export function eventHandlers() {
  document
    .querySelector('#location-form')
    .addEventListener('click', handleWeather);
}
