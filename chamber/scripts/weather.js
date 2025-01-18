const lat =38.00417539321116;
const lon =-122.29824201829445;
const key ='deec6a3c399e4cb60e5ccaf8aa746390';


// Function to fetch weather data
async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon${lon}&appid=${key}&units=imperial`);
        const data = await response.json();
        const { main, weather } = data;
        const currentTemperature = main.temp;
        const currentWeatherDescription = weather[0].description;
        
        // Display current weather
        document.getElementById('weather').innerHTML = `
            <h2>Current Weather</h2>
            <p>Temperature: ${currentTemperature}°C</p>
            <p>Description: ${currentWeatherDescription}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to fetch 3-day forecast
async function fetchForecast() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`);
        const data = await response.json();
        const forecastData = data.list.slice(0, 8 * 3); // Extracting 3 days (8 forecasts per day)
        const forecastTemperatures = forecastData.map(entry => entry.main.temp);
        
        // Calculate average temperature for each day
        const dailyAverages = [];
        for (let i = 0; i < forecastTemperatures.length; i += 8) {
            const dailyTempSum = forecastTemperatures.slice(i, i + 8).reduce((acc, temp) => acc + temp, 0);
            const dailyAverageTemp = (dailyTempSum / 8).toFixed(2);
            dailyAverages.push(dailyAverageTemp);
        }

        // Display forecast
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        for (let i = 0; i < dailyAverages.length; i++) {
            const forecastDate = new Date(today);
            forecastDate.setDate(today.getDate() + i);
            const dayOfWeek = daysOfWeek[forecastDate.getDay()];
            document.getElementById('weather').innerHTML += `
                <h2>${dayOfWeek}</h2>
                <p>Temperature: ${dailyAverages[i]}°C</p>
            `;
        }
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }

}

// Function to check if it's Monday, Tuesday, or Wednesday and show the banner
function showBanner() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        document.getElementById('banner').style.display = 'block';
    }
}

// Function to close the banner
function closeBanner() {
    document.getElementById('banner').style.display = 'none';
}

// On page load, fetch weather data and show the banner if applicable
window.onload = function () {
    fetchWeather();
    fetchForecast();
    showBanner();
};