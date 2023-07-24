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
}

export function renderMain() {
  const mainElement = createElement("div", bodyElement);
  const pElement = createElement("p", mainElement);
  pElement.textContent = "Weather app";
}
