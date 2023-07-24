# weather-app

Create a weather app which tells me a list of things to put in my running bag based on the weather outside. e.g. if its raining, I should have my jacket. If its sunny, I should have my. if its cold I should include my wind proof.

- Use only only javascript, html and css (no libraries/frameworks)
- use the project as a way to learn promises/async/await/fetch methods
- use weatherapi.com
- allow users to set their own location via a form
- add some css styling
- add loading components to show that the app is calling the api

Structure the code with separte modules. eg

- One for the the api calls
- one for rendering the page
- one for handling the logic eg addeventlisteners

# Draft action plan

- Implement a basic version of the ui.js module that can display some hard-coded data.
- Connect the api.js and ui.js modules in main.js. At this point, you should be able to enter a location, make a request to the weather API, and see the raw data displayed in the UI.
- Implement the logic.js module. Start by implementing a function that takes some hard-coded weather data and returns a list of items to pack.
- Connect the logic.js module to the rest of the app. Now you should be able to enter a location, and see a list of items to pack based on the actual weather data for that location.
- Add error handling. The app should be able to handle errors in the API request gracefully and display an error message to the user.
- Implement the loading component. The app should display a loading animation while waiting for the API response, and hide it once the response is received.
- Style the app. Use CSS to style the app and improve its appearance.
- Test the app. Try different locations and weather conditions to ensure the app works as expected.
- Refine the app based on testing. Make any necessary adjustments to the logic or UI based on your testing.

## Backlog

TODO #8 create some logic of what to pack if certain forcast conditions are met

# Next action

TODO #6 if location doesn't exist, clear the forecast info
