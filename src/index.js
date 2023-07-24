import { getTodaysWeather, getTomorrowsWeather } from "./js/api.js";
import { renderHeader, renderMain } from "./js/ui.js";

let location = "glasgow"; //default location

renderHeader();
renderMain();

function getLocationInput() {
  const headerElement = document.querySelector("header");
  const formElement = headerElement.querySelector("form");
  const inputElement = formElement.querySelector("input");
  const buttonElement = formElement.querySelector("button");
  buttonElement.addEventListener("click", (event) => {
    event.preventDefault();
    location = inputElement.value;
    // console.log(location);
    // console.log("button clicked", event);
    getTodaysWeather(location);
    getTomorrowsWeather(location).then((response) => {
      console.log(response);
    });
  });
}

getLocationInput();
