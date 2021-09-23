let apiKey = "6ed4b8240db798c9a2cc708c63ab3c0c&units=metric";

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  (cityElement.innerHTML = response), data.name;
  (descriptionElement.innerHTML = response), data, weather[0].description;
  humiditiyElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = formatDate(response.data.dt * 1000);
}

function displayFahrenheitTemperature(event) {
 event.preventDefault();
 let temperatureElement =document.querySelector("#temperature");

celsiusLink.classList.remove("active");
fahrenheitLink.classList.add("active");
let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
temperatureElement.innerHTML = Math.round(fahreneitTemperaure);
}

let celsiusTemperaure = null;

let fahrenheitLink =document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperaure);

let celsiusLink =document.querySelector("celsius-link");
celsiusLink.addEventListener("click", displayCelsiusLink)

search("Pollock Pines");


let iconElement = document.querySelector("#icon");
iconElement.setAttribute("src", 'http://openweathermap.org/img/wn/${response.data.weather[0].icon}'





axios.get(apiUrl).then(showTemperature);

function editLocation(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");

  let city = document.querySelector("#selector-city").value;
  h1.innerHTML = city;
  let apiUrl =
    "https://api.openweather.org/data/2.5/weather?q=${city}&appid=6ed4b8240db798c9a2cc708c63ab3c0c&units=metric";

  axios.get(apiUrl).then(showTemperature);
}

function search(event) {
  event.preventDefault();
let cityInputElement =document.querySelector("#city-input");
console.log(cityinputElement.value);
}

  navigator.geolocation.getCurrentPosition(currentPosition);
}


console.log(days);
let now = new Date();
let h2 = document.querySelector("h2");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
let day = days[now.getDay()];


let form =document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
