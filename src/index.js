import './styles.css';
import { eventHandlers } from './events.js';


export function populateValues(value){
    const weatherValues = [];
    value.days.forEach((day,index)=>{
        let dayWeather = {};
        dayWeather.day = day.datetime;
        dayWeather.temp = day.temp;
        dayWeather.icon = day.icon;
        dayWeather.conditions = day.conditions;
        dayWeather.precipprob = day.precipprob;
        dayWeather.tempmax = day.tempmax;
        dayWeather.tempmin = day.tempmin;
        weatherValues.push(dayWeather)
    })

    buildPage(value.resolvedAddress, weatherValues);
}

function buildPage(address,weather) {
  // <div class="date"></div>
  // <div class="temp"></div>
  // <div class="icon"></div>
  // <div class="cond"></div>
  // <div class="perciprob"></div>
  // <div class="high"></div>
  // <div class="low"></div>
//   const weather = value.days;
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
    divDate.innerHTML = day.day;
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
