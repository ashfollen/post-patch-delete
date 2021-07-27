document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const query = document.querySelector('#meal-input').value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then(resp => resp.json())
    .then(data => console.log(data))
})
