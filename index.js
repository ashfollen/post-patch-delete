const url = "http://localhost:3000/pokemons"
const pokeContainer = document.getElementById("poke-container");
const pokeForm = document.getElementById("poke-form");

function renderPoke(pokemon) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${pokemon.id}`;
  pokeCard.className = "poke-card";

  const pokeImg = document.createElement("img");
  pokeImg.src = pokemon.img;
  pokeImg.alt = `${pokemon.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = pokemon.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.className = "like-num";
  likesNum.textContent = pokemon.likes;

  const likeBttn = document.createElement("button");
  likeBttn.className = "like-bttn";
  likeBttn.textContent = "♥";
  likeBttn.addEventListener("click", () => increaseLike(pokemon)); 

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "Delete";
  deleteButton.addEventListener('click', () => deletePokemon(pokemon))

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
}

function deletePokemon(pokemon) {
  //make a fetch request DELETE
  //forced optimistic since we don't need the .then's
  document.getElementById(`poke-${pokemon.id}`).remove()
  fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
    method: "DELETE"
  })
  
}

function increaseLike(pokemon) {
//should we be pessimistic or optimistic - let's be optimistic
//PATCH http verb
//what is my endpoint going to be - the id of our object we're making an update to

  const likesElement = event.target.previousElementSibling;
  const likes = pokemon.likes += 1;
  likesElement.textContent = likes;

  fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({ likes: likes }) //what the object is that we'll be updating, and the value of the object
  })
   // optimistic - don't need to use the info we get back, so no need for .then 
}

function createPoke(e) {
  e.preventDefault();
  const pForm = e.target;
  const pokeName = pForm.querySelector("#name-input").value;
  const pokeImg = pForm.querySelector("#img-input").value;

  if (pokeName !== "" && pokeImg !== "") {
    const poke = {
      //id: 7, remove id property because the api will create its own id
      name: pokeName,
      img: pokeImg,
      likes: 0,
    };

  const configObj = {
    method: 'POST', //if you don't want to make a default GET request, you need to include a method to overwrite it
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(poke), 
    }

    fetch(url, configObj)
    .then(resp => resp.json())
    .then(renderPoke); // pessimistic - wait until the server approves the POST before adding it to the DOM
    
    pokeForm.reset();
  } else {
    alert("Fill in the form!!!");
  }
}

function getPokemons() {
  // render all pokemons on page

  //first step
  fetch(url) 
  .then(resp => resp.json()) // returns a promise
  .then(pokemons => 
    pokemons.forEach(renderPoke)) // returns another promise
} // name the parameter obvious as to what the dataset we're working with is
// run forEach so that renderPoke function later isn't looking for an array

function init() {
  getPokemons() //add this here so that getPokemons is being called
  pokeForm.addEventListener("submit", createPoke);
}

init();
