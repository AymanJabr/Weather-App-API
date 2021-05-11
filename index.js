const WEATHER_API_KEY = 'Insert_API_KeyHere';
// You can get an api key by subscribing to this website: https://openweathermap.org/

let currentLocation = '';
let coordinates = [];
let avgTemp = '';
let pressure = '';
let humidity = '';
let description = '';
let icon = '';
let myLocation = '';

let inCelcius = true;

const documentLocation = document.getElementById('location');
const documentLongitude = document.getElementById('longitude');
const documentLatitude = document.getElementById('latitude');
const documentTemperature = document.getElementById('temperature');
const documentPressure = document.getElementById('pressure');
const documentHumidity = document.getElementById('humidity');
const documentDescription = document.getElementById('description');
const documentIcon = document.getElementById('weatherIcon');
const documentLocationInput = document.getElementById('locationSearch');
const documentLocationButton = document.getElementById('searchLocationButton');
const documentChangeTemperature = document.getElementById('change-temperature');

const clearDocument = () => {
  documentLocation.innerHTML = 'Current Location: ';
  documentLatitude.innerHTML = 'Latitude: ';
  documentLongitude.innerHTML = 'Longitude: ';
  documentTemperature.innerHTML = 'Average Temperature (C): ';
  documentPressure.innerHTML = 'Pressure (mbar): ';
  documentHumidity.innerHTML = 'Humidity (percentage): ';
  documentDescription.innerHTML = 'Cloud Conditions: ';
};

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

    documentLocation.innerHTML += currentLocation;
    documentLatitude.innerHTML += coordinates[1];
    documentLongitude.innerHTML += coordinates[0];
    documentTemperature.innerHTML += avgTemp;
    documentPressure.innerHTML += pressure;
    documentHumidity.innerHTML += humidity;
    documentDescription.innerHTML += description;
    documentIcon.src = `http://openweathermap.org/img/w/${icon}.png`;
  }).catch((e) => console.error(e));
});

documentChangeTemperature.addEventListener('click', () => {
  if (inCelcius) {
    inCelcius = false;
    documentChangeTemperature.innerHTML = 'Change Temperature to Celsius';
    documentTemperature.innerHTML = `Average Temperature (F): ${Math.round(((avgTemp * 9) / 5) + 32)}`;
  } else {
    inCelcius = true;
    documentChangeTemperature.innerHTML = 'Change Temperature to Fahrenheit';
    documentTemperature.innerHTML = `Average Temperature (C): ${avgTemp}`;
  }
});
