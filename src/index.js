import './styles.css';
import { eventHandlers } from './events.js';

export function populateValues(value) {
  // <div class="date"></div>
  // <div class="temp"></div>
  // <div class="icon"></div>
  // <div class="cond"></div>
  // <div class="perciprob"></div>
  // <div class="high"></div>
  // <div class="low"></div>
  const address = value.resolvedAddress;
  const weather = value.days;
  const locationDiv = document.querySelector('#location');
  const todayDiv = document.querySelector('#today-section');
  const forecastDiv = document.querySelector('#forecast-section');

  locationDiv.innerHTML = address;

  weather.forEach((day, index) => {
    let divDate = document.createElement('div');
    let divTemp = document.createElement('div');
    let divIcon = document.createElement('div');
    let divCond = document.createElement('div');
    let divPreciprob = document.createElement('div');
    let divHigh = document.createElement('div');
    let divLow = document.createElement('div');
    divDate.innerHTML = day.datetime;
    divTemp.innerHTML = day.temp;
    divIcon.innerHTML = day.icon;
    divCond.innerHTML = day.conditions;
    divPreciprob.innerHTML = day.precipprob;
    divHigh.innerHTML = day.tempmax;
    divLow.innerHTML = day.tempmin;

    if (index == 0) {
      todayDiv.appendChild(divDate);
      todayDiv.appendChild(divTemp);
      todayDiv.appendChild(divIcon);
      todayDiv.appendChild(divCond);
      todayDiv.appendChild(divPreciprob);
      todayDiv.appendChild(divHigh);
      todayDiv.appendChild(divLow);
    } else {
      forecastDiv.appendChild(divDate);
      forecastDiv.appendChild(divTemp);
      forecastDiv.appendChild(divIcon);
      forecastDiv.appendChild(divCond);
      forecastDiv.appendChild(divPreciprob);
      forecastDiv.appendChild(divHigh);
      forecastDiv.appendChild(divLow);
    }
  });
}

(() => {
  eventHandlers();
})();
