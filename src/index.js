import { getTodaysWeather, getTomorrowsWeather } from "./js/api.js";
import { renderHeader, renderMain } from "./js/ui.js";
import { showTomorrowsForecast } from "./js/logic.js";

let location = "glasgow"; //default location

renderHeader();
renderMain();

function getLocationInput() {
  const headerElement = document.querySelector("header");
  const formElement = headerElement.querySelector("form");
  const inputElement = formElement.querySelector("input");
  const buttonElement = formElement.querySelector("button");
  const errorMessageElement = formElement.querySelector("p");
  buttonElement.addEventListener("click", async (event) => {
    event.preventDefault();
    location = inputElement.value;

    try {
      await getTomorrowsWeather(location).then((response) => {
        console.log(response);
        showTomorrowsForecast(response);
      });
      errorMessageElement.textContent = `location exists (${location})`;
    } catch (error) {
      console.error("this isn't a valid location", error);
      errorMessageElement.textContent = `location doesn't exist (${location})`;
    }
  });
}

getLocationInput();
