console.log("hello world");

const createElement = (tag, parent) => {
  const newElement = document.createElement(tag);
  const parentElement = document.querySelector(parent);
  parentElement.appendChild(newElement);
  return newElement;
};

const imgElement = createElement("img", "body");
imgElement.src = "#";
imgElement.width = 500;
imgElement.height = 500;

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=GKxa8v58PBFWECBEuX2EfHQ8yoslHvKc&s=cats",
  { mode: "cors" }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response.data.images.original.url);
    imgElement.src = response.data.images.original.url;
  });

// console.log(process.env.WEATHER_API_KEY);

// fetch(
//   `https://api.weatherapi.com/v1/current.json?key=343484fd4a1849a9ab0152454232207&q=london`,
//   {
//     mode: "cors",
//   }
// )
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//comment

// ("https://api.giphy.com/v1/gifs/translate?api_key=GKxa8v58PBFWECBEuX2EfHQ8yoslHvKc&s=cats");
