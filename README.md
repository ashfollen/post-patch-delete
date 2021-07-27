For this exercise, we will be using the following API:

https://www.themealdb.com/api.php

At the moment, a few issues exist with the current code in `index.js`.

1. the fetch request is hardcoded to always return `chicken` meals. 
- `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`
- `s=chicken` is the portion of the endpoint that accepts a term and returns a response based on the value entered after the `=` 
- The goal will be to make the request more dynamic by utilizing our users input in the search form. 
    - Goals: 
        - When a user submits the search form, select and return their input
        - Apply the input value to the endpoint passed in to the fetch request

2. Open up index.html in the browser and inspect your console to see if the data is being received from the request. Correct the current code if it is not. 