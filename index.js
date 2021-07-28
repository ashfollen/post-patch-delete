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

  const br = document.createElement("br");

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "Delete";
  deleteBttn.addEventListener("click", () => deletePokemon(pokemon));

  pokeCard.append(
    pokeImg,
    pokeName,
    pokeLikes,
    likesNum,
    likeBttn,
    br,
    deleteBttn
  );
  pokeContainer.appendChild(pokeCard);
}

function deletePokemon(pokemon) {
  document.querySelector(`#poke-${pokemon.id}`).remove();
  fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
    method: "DELETE",
  });
}

function increaseLike(pokemon) {
  const likes = ++pokemon.likes;
  event.target.previousElementSibling.textContent = likes;
  fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ likes: likes }),
  });
}

function createPoke(e) {
  e.preventDefault();
  const pForm = e.target;
  const pokeName = pForm.querySelector("#name-input").value;
  const pokeImg = pForm.querySelector("#img-input").value;

  if (pokeName !== "" && pokeImg !== "") {
    const poke = {
      name: pokeName,
      img: pokeImg,
      likes: 0,
    };

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(poke),
    };

    fetch("http://localhost:3000/pokemons", configObj)
      .then((resp) => resp.json())
      .then(renderPoke);
    pokeForm.reset();
  } else {
    alert("Fill in the form!!!");
  }
}

function getPokemons() {
  fetch("http://localhost:3000/pokemons")
    .then((resp) => resp.json())
    .then((pokemons) => {
      pokemons.forEach(renderPoke);
    });
}

function init() {
  getPokemons();
  pokeForm.addEventListener("submit", createPoke);
}

init();
