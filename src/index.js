console.log("hello world");

const createElement = (tag, parent) => {
  const newElement = document.createElement(tag);
  const parentElement = document.querySelector(parent);
  parentElement.appendChild(newElement);
  return newElement;
};

// console.log(process.env.WEATHER_API_KEY);

fetch(
  `https://api.weatherapi.com/v1/current.json?key=343484fd4a1849a9ab0152454232207&q=london`,
  {
    mode: "cors",
  }
)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (err) {
    console.log(err);
  });

// try using axios rather than fecth to avoid the 2nd use of .then
