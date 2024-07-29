const API_KEY = "E6WGELAY433QM2C7U6BPUQFUJ";

const website =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Singapore?key=" +
    API_KEY +
    "&unitGroup=metric";

async function getWeatherInfo() {
    try {
        const response = await fetch(website);
        const data = await response.json();

        const icon = data.days[0].icon;
        const temp = data.days[0].temp;
        const conditions = data.days[0].conditions;
        const feelsLike = data.days[0].feelslike;

        // Get HTML elements
        const weatherTemperatureTemp = document.querySelector(
            ".weather-temperature-temp"
        );
        const weatherConditions = document.querySelector(".weather-conditions");
        const weatherTemperatureFeelslike = document.querySelector(
            ".weather-temperature-feelslike"
        );
        const weather = document.querySelector(".weather");

        // Populate Information
        weatherTemperatureTemp.textContent = temp + "°";
        weatherConditions.textContent = conditions;
        weatherTemperatureFeelslike.textContent =
            "Feels like " + feelsLike + "°";

        const img = document.createElement("img");
        img.src = "assets/images/" + icon + ".svg";
        img.alt = icon + "image";

        weather.appendChild(img);
    } catch (error) {
        console.log(error);
    }
}

getWeatherInfo();
