For this exercise, we will be using the following API:

https://www.themealdb.com/api.php

Currently there are a few issues with the existing fetch request.

1. the fetch request is hardcoded to always return `chicken` meals. 
- `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`
- `s=chicken` This portion of the endpoint accepts a term and returns results based on the value entered after the `=` 
- Our goal will be to make this a more dynamic endpoint by utilizing our users search input. Something to think about is how to select the users input and use it in the current code.

2. Open up index.html in the browser and inspect your console to see if the data is being received from the request. Correct the current code if it is not. 