import { getWeatherData } from "./src/services/weatherAPI.js";
import { renderWeatherCard } from "./src/components/WeatherCard.js";
import { renderForecastList } from "./src/components/ForecastList.js";
import { debounce } from "./src/utils/debounce.js";
const searchInput = document.getElementById("searchInput");
const weatherContainer = document.getElementById("weatherContainer");
const forecastContainer = document.getElementById("forecastContainer");
async function handleSearch(city) {
    if (!city) return;
    const data = await getWeatherData(city);
    if (!data) {
        weatherContainer.innerHTML = "<p>City not found.</p>";
        forecastContainer.innerHTML = "";
        return;
    }
    weatherContainer.innerHTML = renderWeatherCard(data.current);
    forecastContainer.innerHTML = renderForecastList(data.forecast);
}
searchInput.addEventListener(
    "input",
    debounce((e) => handleSearch(e.target.value), 600)
);