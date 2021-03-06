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
const documentError = document.getElementById('error-message');

const convertToFahrenheit = (avgTemp) => {
  documentChangeTemperature.innerHTML = 'Change Temperature to Celsius';
  documentTemperature.innerHTML = `Average Temperature (F): ${Math.round(((avgTemp * 9) / 5) + 32)}`;
};

const convertToCelsius = (avgTemp) => {
  documentChangeTemperature.innerHTML = 'Change Temperature to Fahrenheit';
  documentTemperature.innerHTML = `Average Temperature (C): ${avgTemp}`;
};

const giveErrorMessage = () => {
  documentError.innerHTML = 'Please Enter a valid City Name';
};

const clearDocument = () => {
  documentError.innerHTML = '';
  documentLocation.innerHTML = 'Current Location: ';
  documentLatitude.innerHTML = 'Latitude: ';
  documentLongitude.innerHTML = 'Longitude: ';
  documentTemperature.innerHTML = 'Average Temperature (C): ';
  documentPressure.innerHTML = 'Pressure (mbar): ';
  documentHumidity.innerHTML = 'Humidity (percentage): ';
  documentDescription.innerHTML = 'Cloud Conditions: ';
};

/* eslint-disable max-len */
const updateDocument = (currentLocation, latitude, longitude, avgTemp, pressure, humidity, description, icon) => {
  documentLocation.innerHTML += currentLocation;
  documentLatitude.innerHTML += latitude;
  documentLongitude.innerHTML += longitude;
  documentTemperature.innerHTML += avgTemp;
  documentPressure.innerHTML += pressure;
  documentHumidity.innerHTML += humidity;
  documentDescription.innerHTML += description;
  documentIcon.src = `http://openweathermap.org/img/w/${icon}.png`;
};

export {
  convertToCelsius, convertToFahrenheit, clearDocument, updateDocument, giveErrorMessage, documentLocationInput, documentLocationButton, documentChangeTemperature,
};