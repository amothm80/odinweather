import './styles.css';
import { eventHandlers } from './events.js';
import { format } from 'date-fns';
import rainSnowShowersDay from './assets/rain-snow-showers-day.svg';
import snowShowersNight from './assets/snow-showers-night.svg';
import clearDay from './assets/clear-day.svg';
import rainSnowShowersNight from './assets/rain-snow-showers-night.svg';
import snow from './assets/snow.svg';
import clearNight from './assets/clear-night.svg';
import rainSnow from './assets/rain-snow.svg';
import thunderRain from './assets/thunder-rain.svg';
import cloudy from './assets/cloudy.svg';
import rain from './assets/rain.svg';
import thunderShowersDay from './assets/thunder-showers-day.svg';
import fog from './assets/fog.svg';
import showersDay from './assets/showers-day.svg';
import thunderShowersNight from './assets/thunder-showers-night.svg';
import hail from './assets/hail.svg';
import showersNight from './assets/showers-night.svg';
import thunder from './assets/thunder.svg';
import partlyCloudyDay from './assets/partly-cloudy-day.svg';
import sleet from './assets/sleet.svg';
import wind from './assets/wind.svg';
import partlyCloudyNight from './assets/partly-cloudy-night.svg';
import snowShowersDay from './assets/snow-showers-day.svg';

function displaySections() {
  const locationDiv = document.querySelector('#location');
  const todayDiv = document.querySelector('#today-section');
  const forecastDiv = document.querySelector('#forecast-section');
  locationDiv.style.display = 'flex';
  todayDiv.style.display = 'grid';
  forecastDiv.style.display = 'flex';
}

function hideSections() {
  const locationDiv = document.querySelector('#location');
  const todayDiv = document.querySelector('#today-section');
  const forecastDiv = document.querySelector('#forecast-section');
  locationDiv.style.display = 'none';
  todayDiv.style.display = 'none';
  forecastDiv.style.display = 'none';
}

export function showError(error) {
  const locationInput = document.querySelector('#location-input');
  locationInput.setCustomValidity(error);
  locationInput.reportValidity();
  hideSections();
}

function weatherIcon(iconName) {
  switch (iconName) {
    case 'rain-snow-showers-day':
      return rainSnowShowersDay;
    case 'snow-showers-night':
      return snowShowersNight;
    case 'clear-day':
      return clearDay;
    case 'rain-snow-showers-night':
      return rainSnowShowersNight;
    case 'snow':
      return snow;
    case 'clear-night':
      return clearNight;
    case 'rain-snow':
      return rainSnow;
    case 'thunder-rain':
      return thunderRain;
    case 'cloudy':
      return cloudy;
    case 'rain':
      return rain;
    case 'thunder-showers-day':
      return thunderShowersDay;
    case 'fog':
      return fog;
    case 'showers-day':
      return showersDay;
    case 'thunder-showers-night':
      return thunderShowersNight;
    case 'hail':
      return hail;
    case 'showers-night':
      return showersNight;
    case 'thunder':
      return thunder;
    case 'partly-cloudy-day':
      return partlyCloudyDay;
    case 'sleet':
      return sleet;
    case 'wind':
      return wind;
    case 'partly-cloudy-night':
      return partlyCloudyNight;
    case 'snow-showers-day':
      return snowShowersDay;
  }
}

export function checkReponse(value) {
  if(typeof(value) =='string'){
    showError(value)
  }else{
    populateValues(value)
  }

}

function populateValues(value) {
  const weatherValues = [];
  value.days.forEach((day, index) => {
    const dayWeather = {};
    if (index == 0 && format(day.datetime, 'P') == format(new Date(), 'P')) {
      dayWeather.day = 'Today';
    } else {
      dayWeather.day = format(day.datetime, 'eeee');
    }
    // dayWeather.day = day.datetime;
    dayWeather.temp = `${Math.round(parseFloat(day.temp))}°`;
    dayWeather.icon = day.icon;
    dayWeather.conditions = day.conditions;
    dayWeather.precipprob = day.precipprob;
    dayWeather.tempmax = `${Math.round(parseFloat(day.tempmax))}°`;
    dayWeather.tempmin = `${Math.round(parseFloat(day.tempmin))}°`;
    weatherValues.push(dayWeather);
  });

  weatherValues.splice(8);

  buildPage(value.resolvedAddress, weatherValues);
}

export function buildLoaders() {
  const locationDiv = document.querySelector('#location');
  locationDiv.innerHTML = '<div class="loader"></div>';
  const todayDiv = document.querySelector('#today-section');
  todayDiv.innerHTML = ' <div class="loader"></div> ';
  const forecastDiv = document.querySelector('#forecast-section');
  forecastDiv.innerHTML = ' <div class="loader"></div> ';
  displaySections();
}

function buildPage(address, weather) {
  // <div class="date"></div>
  // <div class="temp"></div>
  // <div class="icon"></div>
  // <div class="cond"></div>
  // <div class="perciprob"></div>
  // <div class="high"></div>
  // <div class="low"></div>
  //   const weather = value.days;
  displaySections();
  const locationDiv = document.querySelector('#location');
  const todayDiv = document.querySelector('#today-section');
  todayDiv.innerHTML = '';
  const forecastDiv = document.querySelector('#forecast-section');
  forecastDiv.innerHTML = '';

  locationDiv.innerHTML = address;

  weather.forEach((day, index) => {
    const divDate = document.createElement('div');
    const divTemp = document.createElement('div');
    const divIcon = document.createElement('img');
    const divCond = document.createElement('div');
    const divPreciprob = document.createElement('div');
    const divHigh = document.createElement('div');
    const divLow = document.createElement('div');
    divDate.innerHTML = day.day;
    divTemp.innerHTML = day.temp;
    divIcon.src = weatherIcon(day.icon);
    divCond.innerHTML = day.conditions;
    divPreciprob.innerHTML = day.precipprob;
    divHigh.innerHTML = day.tempmax;
    divLow.innerHTML = day.tempmin;

    if (index == 0) {
      divDate.className = 'date-today';
      divTemp.className = 'temp-today';
      divIcon.className = 'icon-today';
      divCond.className = 'cond-today';
      divPreciprob.className = 'preciprob-today';
      divHigh.className = 'high-today';
      divLow.className = 'low-today';
      todayDiv.appendChild(divDate);
      todayDiv.appendChild(divTemp);
      todayDiv.appendChild(divIcon);
      todayDiv.appendChild(divCond);
      // todayDiv.appendChild(divPreciprob);
      todayDiv.appendChild(divHigh);
      todayDiv.appendChild(divLow);
    } else {
      const forecastLineDiv = document.createElement('div');
      forecastLineDiv.className = 'forecast-line';

      divDate.className = 'date-forecast';
      divTemp.className = 'temp-forecast';
      divIcon.className = 'icon-forecast';
      divCond.className = 'cond-forecast';
      divPreciprob.className = 'preciprob-forecast';
      divHigh.className = 'high-forecast';
      divLow.className = 'low-forecast';
      forecastLineDiv.appendChild(divDate);
      forecastLineDiv.appendChild(divHigh);
      forecastLineDiv.appendChild(divLow);
      // forecastLineDiv.appendChild(divTemp);
      forecastLineDiv.appendChild(divIcon);
      forecastLineDiv.appendChild(divCond);
      // forecastDiv.appendChild(divPreciprob);

      forecastDiv.appendChild(forecastLineDiv);
    }
  });
}

(() => {
  eventHandlers();
})();
