let allPokemonNames = [];

init();

function init() {
  getAllPokemon();

  document
    .querySelector("#pokemonName")
    .addEventListener("input", debounce(getPokemonSuggestions, 300));

  // מאזין ללחיצה על כפתור החיפוש
  document.querySelector("#search").addEventListener("click", getPokemon);

  document
    .querySelector("#pokemonName")
    .addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        getPokemon(e);
      }
    });
}

function getAllPokemon() {
  const pokemonList = document.querySelector("#pokemonList");

  fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
    .then((response) => response.json())
    .then((data) => {
      allPokemonNames = data.results.map((pokemon) => pokemon.name);
      displayPokemonList(allPokemonNames, pokemonList);
    })
    .catch((error) => {
      console.log("Error fetching Pokemon list:", error);
    });
}

function displayPokemonList(pokemonNames, listElement) {
  // מנקה את הרשימה הקיימת
  listElement.innerHTML = "";
  pokemonNames.forEach((pokemonName) => {
    const listItem = document.createElement("li");

    // יצירת תמונה
    const img = document.createElement("img");
    img.src = `https://img.pokemondb.net/sprites/home/normal/${pokemonName}.png`;
    img.alt = pokemonName;
    listItem.appendChild(img);

    // יצירת שם הפוקימון
    const nameSpan = document.createElement("span");
    nameSpan.textContent = FirstLetter(pokemonName);
    listItem.appendChild(nameSpan);

    listItem.addEventListener("click", () => {
      document.querySelector("#pokemonName").value = FirstLetter(pokemonName);
      getPokemon();
      document
        .querySelector(".searchBox")
        .scrollIntoView({ behavior: "smooth" });
    });

    listElement.appendChild(listItem);
  });
}

function getPokemonSuggestions() {
  const inputElement = document.querySelector("#pokemonName");
  const inputText = inputElement.value.toLowerCase();

  const filteredSuggestions = allPokemonNames.filter((name) =>
    name.toLowerCase().startsWith(inputText)
  );

  displaySuggestions(filteredSuggestions.slice(0, 20));
}

function displaySuggestions(suggestions) {
  const suggestionsList = document.querySelector("#suggestionsList");
  suggestionsList.innerHTML = "";

  suggestions.forEach((pokemon) => {
    const suggestionItem = document.createElement("li");
    suggestionItem.textContent = FirstLetter(pokemon);

    suggestionItem.addEventListener("click", () => {
      document.querySelector("#pokemonName").value = FirstLetter(pokemon);
      suggestionsList.innerHTML = "";
      getPokemon();
      document
        .querySelector(".pokemonBox")
        .scrollIntoView({ behavior: "smooth" });
    });

    suggestionsList.appendChild(suggestionItem);
  });
}
function getPokemon(e) {
  if (e) e.preventDefault();

  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      // שליפת מידע
      const types = data.types.map((type) => type.type.name);
      const abilities = data.abilities.map((ability) => ability.ability.name);
      const stats = data.stats
        .map((stat) => `<span>${stat.stat.name}: ${stat.base_stat}</span>`)
        .join(" ");

      // עדכון האזור להצגת מידע עם עיצוב חדש
      document.querySelector(".pokemonBox").innerHTML = `
        <div class="pokemonCard">
          <div class="pokemonImage">
            <img src="${
              data.sprites.other["official-artwork"].front_default
            }" alt="${FirstLetter(data.name)}">
          </div>
          <div class="pokemonDetails">
            <h1>${FirstLetter(data.name)}</h1>
            <p><strong>Types:</strong> ${types.join(", ")}</p>
            <p><strong>Abilities:</strong> ${abilities.join(", ")}</p>
            <div class="pokemonStats"><strong>Stats:</strong> ${stats}</div>
            <p><strong>Weight:</strong> ${data.weight}</p>
            <p><strong>Height:</strong> ${data.height}</p>
          </div>
        </div>
      `;
    })
    .catch((err) => {
      console.log("Pokemon not found", err);
    });
}

function FirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
