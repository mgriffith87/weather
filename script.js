function showTemperature(response) {
  response.preventDefault();
  let temperature = Math.round(response.data.main.temp);

  let updateP = document.querySelector("#show-temperature");
  updateP.innerHTML = "It is ${temperature}°F in ${city.value}";
}

function editLocation(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");

  let city = document.querySelector("#selector-city").value;
  h1.innerHTML = city;
  let apiKey = "6ed4b8240db798c9a2cc708c63ab3c0c";
  let apiUrl =
    "https://api.openweather.org/data/2.5/weather?q=${city}&appid=6ed4b8240db798c9a2cc708c63ab3c0c&units=metric";

  axios.get(apiUrl).then(showTemperature);
}

function showCurrentPosition(event) {
  event.preventDefault();

  navigator.geolocation.getCurrentPosition(currentPosition);
}

let formSearch = document.querySelector("form");
formSearch = document.addEventListener("submit", editLocation);

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
let months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  console.log(cityInputElement.value);
}
