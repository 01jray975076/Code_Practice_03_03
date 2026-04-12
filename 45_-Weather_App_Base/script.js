// ------------------------------
// API CONFIG
// ------------------------------
const API_KEY = "c6e5a02191f6dd1a3f4335b78018ac39";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
// ------------------------------
// DOM ELEMENTS
// ------------------------------
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherCard = document.getElementById("weatherCard");
const errorMessage = document.getElementById("errorMessage");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");
// ------------------------------
// EVENT LISTENERS
// ------------------------------
searchBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") getWeather();
});
// ------------------------------
// FETCH WEATHER DATA
// ------------------------------
async function getWeather() {
    const city = cityInput.value.trim();
    if (city === "") return;
    // Hide previous error
    errorMessage.classList.add("hidden");
    try {
        const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=imperial`;
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("City not found");
        }
        const data = await res.json();
        updateUI(data);
    } catch (err) {
        showError();
    }
}
// ------------------------------
// UPDATE UI WITH WEATHER DATA
// ------------------------------
function updateUI(data) {
    weatherCard.classList.remove("hidden");
    cityName.textContent = data.name;
    temperature.textContent = Math.round(data.main.temp) + "°";
    description.textContent = data.weather[0].description;
    humidity.textContent = data.main.humidity + "%";
    wind.textContent = Math.round(data.wind.speed) + " mph";
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
// ------------------------------
// SHOW ERROR MESSAGE
// ------------------------------
function showError() {
    weatherCard.classList.add("hidden");
    errorMessage.classList.remove("hidden");
}