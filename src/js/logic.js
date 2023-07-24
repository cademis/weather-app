export function showTomorrowsForecast(data) {
  const mainElement = document.querySelector("main");
  const pElement = mainElement.querySelector("p");
  console.log(data);
  pElement.textContent = `Tomorrows data... chance of rain: ${data.chanceOfRain} windMph: ${data.windMph} tempC: ${data.tempC}`;
}
