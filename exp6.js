const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const weatherDisplay = document.getElementById("weatherDisplay");
const errorMsg = document.getElementById("errorMsg");


async function fetchWeather(city) {
  try {
    errorMsg.textContent = "";
    const url = `https://wttr.in/${city}?format=j1`;
    console.log("Fetching:", url);

    const response = await fetch(url);
    const data = await response.json();
    console.log("API Response:", data);

    if (!data.current_condition) {
      throw new Error("City not found");
    }
    cityName.textContent = city;
    temperature.textContent = `🌡️ Temperature: ${data.current_condition[0].temp_C}°C`;
description.textContent = `🌬️ Condition: ${data.current_condition[0].weatherDesc[0].value}`;

    weatherDisplay.style.display = "block";

    
    localStorage.setItem("lastCity", city);
  } catch (error) {
    errorMsg.textContent = error.message;
    weatherDisplay.style.display = "none";
  }
}


searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    errorMsg.textContent = "Please enter a city name!";
  }
});


window.addEventListener("load", () => {
  const lastCity = localStorage.getItem("lastCity");
  if (lastCity) {
    fetchWeather(lastCity);
  }
});
