export function renderWeatherCard(data) {
    return `
    <div class="weather-card">
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Condition: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    </div>
    `;
}