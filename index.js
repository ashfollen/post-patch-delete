fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
.then(resp => resp)
.then(data => console.log(data))