const bodyElement = document.querySelector("body");

const createElement = (tag, parentElement) => {
  const newElement = document.createElement(tag);
  parentElement.appendChild(newElement);
  return newElement;
};

export function renderHeader() {
  const headerElement = createElement("header", bodyElement);
  const formElement = createElement("form", headerElement);
  const labelElement = createElement("label", formElement);
  labelElement.htmlFor = "location-input";
  labelElement.textContent = "location";
  const inputElement = createElement("input", formElement);
  inputElement.type = "text";
  inputElement.id = "location-input";
  const buttonElement = createElement("button", formElement);
  buttonElement.textContent = "submit";
  const errorMessageElement = createElement("p", formElement);
  errorMessageElement.textContent = "no errors";
}

export function renderMain() {
  const mainElement = createElement("main", bodyElement);
  const pElement = createElement("p", mainElement);
  pElement.textContent = "Weather app";
}
