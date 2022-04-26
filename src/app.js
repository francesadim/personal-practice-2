//let apiKey = d5453a99d7bbcbcb83f0b73e111b264c;
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&appid=d5453a99d7bbcbcb83f0b73e111b264c&units=imperial`;

function displayWeather(response) {
  let apiKey = "d5453a99d7bbcbcb83f0b73e111b264c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&appid=${apiKey}`;

  console.log(response.data);

  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#weather-description");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.main.description;
  axios.get(apiUrl).then(displayWeather);
}
