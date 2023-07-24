export function showTomorrowsForecast(data, error) {
  const mainElement = document.querySelector("main");
  const pElement = mainElement.querySelector("p");

  if (error) {
    console.log("this isn't a valid location", error);
    pElement.textContent = `Error: Location doesn't exist (${data})`;
  } else {
    console.log(data);
    pElement.textContent = `Tomorrows data... chance of rain: ${data.chanceOfRain} windMph: ${data.windMph} tempC: ${data.tempC}`;
  }
}
