const API_KEY = "E6WGELAY433QM2C7U6BPUQFUJ";

const website =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Singapore?key=" +
    API_KEY +
    "&unitGroup=metric";

async function getWeatherInfo() {
    try {
        const response = await fetch(website);
        const data = await response.json();
        console.log(data.days[0]);

        const icon = data.days[0].icon;
        console.log(icon);
    } catch (error) {
        console.log(error);
    }
}

getWeatherInfo();
