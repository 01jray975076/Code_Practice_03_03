const API_KEY = "c6e5a02191f6dd1a3f4335b78018ac39";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
export async function getWeatherData(city) {
    try {
        const currentRes = await fetch(
            `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!currentRes.ok) return null;
        const current = await currentRes.json();
        const forecastRes = await fetch(
            `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        const forecastData = await forecastRes.json();
        return {
            current,
            forcast: forecastData.list.slice(0, 5) // first 5 intevals
        };
    } catch (err) {
        console.log("API error:", err);
        return null;
    }
}
