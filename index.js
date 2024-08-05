// const location = "SINGAPORE";
const API_KEY = "E6WGELAY433QM2C7U6BPUQFUJ";

function formInit() {
    getWeatherInfo("Singapore");

    const locationForm = document.querySelector(".locationForm");

    locationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(locationForm);
        const location = formData.get("location");

        getWeatherInfo(location);
    });
}

async function getWeatherInfo(location) {
    const website =
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=` +
        API_KEY +
        "&unitGroup=metric";

    try {
        const response = await fetch(website);
        const data = await response.json();

        const icon = data.days[0].icon;
        const temp = data.days[0].temp;
        const conditions = data.days[0].conditions;
        const feelsLike = data.days[0].feelslike;

        const weather = document.querySelector(".weather");
        weather.innerHTML = "";

        // Get generate elements
        const countryName = document.createElement("h2");
        countryName.innerHTML = location;

        const weatherTemperatureTemp = document.createElement("div");
        weatherTemperatureTemp.className = "weather-temperature-temp";
        weatherTemperatureTemp.innerHTML = temp + "°";

        const weatherConditions = document.createElement("div");
        weatherConditions.className = "weather-conditions";
        weatherConditions.innerHTML = conditions;

        const weatherTemperatureFeelslike = document.createElement("div");
        weatherTemperatureFeelslike.className = "weather-temperature-feelslike";
        weatherTemperatureFeelslike.innerHTML = "Feels like " + feelsLike + "°";

        // Append elements to weather
        const weatherContent = document.createElement("div");
        weatherContent.className = "weather-content";

        // Add all elements to weatherContent
        weatherContent.appendChild(countryName);
        weatherContent.appendChild(weatherTemperatureTemp);
        weatherContent.appendChild(weatherConditions);
        weatherContent.appendChild(weatherTemperatureFeelslike);

        weather.appendChild(weatherContent);

        // Add Image to weather
        const img = document.createElement("img");
        img.src = "assets/images/" + icon + ".svg";
        img.alt = icon + "image";

        weather.appendChild(img);
    } catch (error) {
        console.log(error);
    }
}

formInit();
