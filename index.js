const WEATHER_API_KEY = '2ae79583e0f2d3eb58119b55bbb02972'

let myLocation = window.prompt("Enter the location where you wish to get Weather information for")
myLocation = myLocation.trim()
if (myLocation == null || myLocation == '') myLocation = "London"


let currentLocation = ''
let coordinates = []
let avgTemp = ''
let pressure = ''
let humidity = ''
let description = ''

let document_location = document.getElementById('location')
let document_longitude = document.getElementById('longitude')
let document_latitude = document.getElementById('latitude')
let document_temperature = document.getElementById('temperature')
let document_pressure = document.getElementById('pressure')
let document_humidity = document.getElementById('humidity')
let document_description = document.getElementById('description')

weatherData = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${myLocation}&appid=${WEATHER_API_KEY}`, {
    mode: 'cors'
}).then(resonse => resonse.json()).then(data => {
    console.log(data)
    
    currentLocation = data.name
    coordinates = [data.coord.lon,  data.coord.lat]
    avgTemp = Number(data.main.temp) - 273
    pressure = data.main.pressure
    humidity = data.main.humidity
    description = data.weather[0].description


    document_location.innerHTML += currentLocation
    document_latitude.innerHTML += coordinates[1]
    document_longitude.innerHTML += coordinates[0]
    document_temperature.innerHTML += avgTemp
    document_pressure.innerHTML += pressure
    document_humidity.innerHTML += humidity
    document_description.innerHTML += description

    

})

