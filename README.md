For this exercise, we will be using the following API:

https://www.themealdb.com/api.php

At the moment, a few issues exist with the current code in `index.js`.

1. the fetch request is hardcoded to always return `chicken` meals. 
- `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`
- `s=chicken` is the portion of the endpoint that accepts a term and returns a response based on the value entered after the `=` 
- The goal will be to make the request dynamic by utilizing our users input in the search form. 
    - Action items: 
        - When user submits the search form, select and return the value of the input.
        - Dynamically apply the input value to the endpoint currently passed to fetch.
        - The fetch request should only happen after the form is submitted

2. Open index.html in the browser and inspect the console to see if the anticipated data is being received from the request. Review the code to identify what needs to be updated to correct the current output. 