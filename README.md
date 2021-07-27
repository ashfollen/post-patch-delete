For this exercise, we will be using the following API:

https://www.themealdb.com/api.php

At the moment, a few issues exist with the current code in `index.js`.

1. the fetch request is hardcoded to always return `chicken` meals. 
- `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`
- `s=chicken` is the portion of the endpoint that accepts a term and returns a response based on the value entered after the `=` 
- The goal will be to make the request more dynamic by utilizing our users input in the search form. 
    - Action items: 
        - When a user submits the search form, select and return the value of the input.
        - Think about how to dynamically apply the input value to the endpoint currently used in the fetch request.

2. Open index.html in the browser and inspect the console to see if the anticipated data is being received from the request. Review the fetch request to identify the code that needs to be fixed. 