const WEATHER_API_KEY = `343484fd4a1849a9ab0152454232207`;

console.log("hello world");

async function fetchData(url) {
  try {
    const response = await fetch(url, { mode: "cors" });

    if (!response.ok) {
      throw new Error("response isn't ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("eek something went wrong", error);
  }
}

export async function getTodaysWeather(location) {
  const url = `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}`;
  fetchData(url).then((response) => {
    console.log(
      `the current temp in ${location} is ${response.current.temp_c} degC`
    );
  });
}

export async function getTomorrowsWeather(location) {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=2&aqi=no&alerts=no`;
  const data = fetchData(url).then((response) => {
    console.log(response.forecast.forecastday[1]);
    const data = response.forecast.forecastday[1];
    const morningForecast = data.hour[8]; //change the number based on the hour. e.g. hour[8] is 08:00
    let chanceOfRain = morningForecast.chance_of_rain;
    let windMph = morningForecast.wind_mph;
    let tempC = morningForecast.temp_c;
    return { chanceOfRain, windMph, tempC };
  });
  return data;
}