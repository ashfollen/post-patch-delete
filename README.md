For this exercise, we will be using the following API: https://www.themealdb.com/api.php

At the moment, a few issues exist with the current code in `index.js`.

1. The fetch request is hardcoded and will always return `chicken` meals: `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`
    - `s=chicken` is the parameter provided to the endpoint that accepts a query term and returns a response based on the value after the `=`.
    - The goal is to update the current code and create a dynamic parameter based on the users entry. 
    - Action items: 
        - The fetch request should only happen after the form is submitted
        - When user submits the search form, select and return the value of the input.
        - Dynamically apply the input value to the endpoint currently passed to fetch.

2. Open index.html in the browser and inspect the console to see if the anticipated data is being received from the request. Review the code to identify what needs to be updated to correct the current output. 