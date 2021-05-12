// You can get an api key by subscribing to this website: https://openweathermap.org/

/* eslint-disable max-len */

import {
  convertToCelsius, convertToFahrenheit, clearDocument, updateDocument, giveErrorMessage, documentLocationInput, documentLocationButton, documentChangeTemperature,
} from './doc-man';

const WEATHER_API_KEY = 'Insert_API_KeyHere';

let currentLocation = '';
let coordinates = [];
let avgTemp = '';
let pressure = '';
let humidity = '';
let description = '';
let icon = '';
let myLocation = '';

let inCelsius = true;

documentLocationButton.addEventListener('click', () => {
  myLocation = documentLocationInput.value;
  myLocation = myLocation.trim();
  if (myLocation == null || myLocation === '') myLocation = 'London';

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${myLocation}&appid=${WEATHER_API_KEY}`, {
    mode: 'cors',
  }).then((response) => response.json()).then((data) => {
    currentLocation = data.name;
    coordinates = [data.coord.lon, data.coord.lat];
    avgTemp = Math.round(Number(data.main.temp) - 273);
    pressure = data.main.pressure;
    humidity = data.main.humidity;
    description = data.weather[0].description;
    icon = data.weather[0].icon;

    clearDocument();

    updateDocument(currentLocation, coordinates[0], coordinates[1], avgTemp, pressure, humidity, description, icon);
  }).catch(() => {
    giveErrorMessage();
  });
});

documentChangeTemperature.addEventListener('click', () => {
  if (inCelsius) {
    inCelsius = false;
    convertToFahrenheit(avgTemp);
  } else {
    inCelsius = true;
    convertToCelsius(avgTemp);
  }
});
