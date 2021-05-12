

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


const convertToFahrenheit = () => {
    documentChangeTemperature.innerHTML = 'Change Temperature to Celsius';
    documentTemperature.innerHTML = `Average Temperature (F): ${Math.round(((avgTemp * 9) / 5) + 32)}`;
}

const convertToCelsius = () => {
    documentChangeTemperature.innerHTML = 'Change Temperature to Fahrenheit';
    documentTemperature.innerHTML = `Average Temperature (C): ${avgTemp}`;
}


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

const updateDocument = (currentLocation, latitude, longitude, avgTemp, pressure, humidity, description, icon) => {

    documentLocation.innerHTML += currentLocation;
    documentLatitude.innerHTML += latitude;
    documentLongitude.innerHTML += longitude;
    documentTemperature.innerHTML += avgTemp;
    documentPressure.innerHTML += pressure;
    documentHumidity.innerHTML += humidity;
    documentDescription.innerHTML += description;
    documentIcon.src = `http://openweathermap.org/img/w/${icon}.png`;

}


// export {documentError, documentTemperature, documentPressure, documentLongitude, documentLocationInput, documentLocation, documentLatitude, documentHumidity, documentDescription, documentIcon, documentChangeTemperature, documentLocationButton}