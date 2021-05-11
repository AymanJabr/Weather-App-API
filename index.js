const WEATHER_API_KEY = 'Insert_API_KeyHere';
// You can get an api key by subscribing to this website: https://openweathermap.org/

let myLocation = window.prompt('Enter the location where you wish to get Weather information for');
myLocation = myLocation.trim();
if (myLocation == null || myLocation === '') myLocation = 'London';

let currentLocation = '';
let coordinates = [];
let avgTemp = '';
let pressure = '';
let humidity = '';
let description = '';

const documentLocation = document.getElementById('location');
const documentLongitude = document.getElementById('longitude');
const documentLatitude = document.getElementById('latitude');
const documentTemperature = document.getElementById('temperature');
const documentPressure = document.getElementById('pressure');
const documentHumidity = document.getElementById('humidity');
const documentDescription = document.getElementById('description');

const weatherData = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${myLocation}&appid=${WEATHER_API_KEY}`, {
  mode: 'cors',
}).then((response) => response.json()).then((data) => {
  currentLocation = data.name;
  coordinates = [data.coord.lon, data.coord.lat];
  avgTemp = Number(data.main.temp) - 273;
  pressure = data.main.pressure;
  humidity = data.main.humidity;
  description = data.weather[0].description;

  documentLocation.innerHTML += currentLocation;
  documentLatitude.innerHTML += coordinates[1];
  documentLongitude.innerHTML += coordinates[0];
  documentTemperature.innerHTML += avgTemp;
  documentPressure.innerHTML += pressure;
  documentHumidity.innerHTML += humidity;
  documentDescription.innerHTML += description;
});
