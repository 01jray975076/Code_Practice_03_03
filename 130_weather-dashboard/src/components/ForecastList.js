export function renderForecastList(list) {
    return `
    <div>
    <h3>Forecast</h3>
    ${list
        .map(
            (item) => `
            <div class="forecast-card">
            <p>${item.dt_txt}</p>
            <p>Temp: ${item.main.temp}°C</p>
            <p>${item, weather[0].description}</p>
            </div>
    `
    )
        .join("")}
        </div>
    `;
}