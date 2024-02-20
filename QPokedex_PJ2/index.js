// Fetch all Pokemon names
getAllPokemon();

function getAllPokemon() {
  const pokemonList = document.querySelector("#pokemonList");

  // Fetch all Pokemon names
  fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
    .then((response) => response.json())
    .then((data) => {
      const pokemonNames = data.results.map((pokemon) => pokemon.name);
      displayPokemonList(pokemonNames, pokemonList);
    })
    .catch((error) => {
      console.log("Error fetching Pokemon list:", error);
    });
}

function displayPokemonList(pokemonNames, listElement) {
  pokemonNames.forEach((pokemonName) => {
    const listItem = document.createElement("li");
    listItem.textContent = pokemonName;
    listElement.appendChild(listItem);
  });
}

document
  .querySelector("#pokemonName")
  .addEventListener("input", getPokemonSuggestions); //Calback Function With Fetch Api

document.querySelector("#search").addEventListener("click", getPokemon);

function FirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemonSuggestions() {
  const inputElement = document.querySelector("#pokemonName");
  const inputText = inputElement.value;

  // Fetch Pokemon names that start with the input letter
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
    .then((response) => response.json())
    .then((data) => {
      const suggestions = data.results.map((pokemon) => pokemon.name);

      // Filter suggestions based on input text
      const filteredSuggestions = suggestions.filter((name) =>
        lowerCaseName(name).startsWith(lowerCaseName(inputText))
      );

      // Display suggestions
      displaySuggestions(filteredSuggestions);
    })
    .catch((err) => {
      console.log("Error fetching Pokemon suggestions", err);
    });
}
function displayPokemonList(pokemonNames, listElement) {
  pokemonNames.forEach((pokemonName) => {
    // Create a list item
    const listItem = document.createElement("li");

    // Create an image element for the Pokémon
    const img = document.createElement("img");
    img.src = `https://img.pokemondb.net/sprites/home/normal/${pokemonName}.png`;
    img.alt = pokemonName;

    // Append the image to the list item
    listItem.appendChild(img);

    // Create a span for the Pokémon name
    const nameSpan = document.createElement("span");
    nameSpan.textContent = FirstLetter(pokemonName);

    // Append the span to the list item
    listItem.appendChild(nameSpan);

    // Append the list item to the list
    listElement.appendChild(listItem);
  });
}

function displaySuggestions(suggestions) {
  const suggestionsList = document.querySelector("#suggestionsList");
  suggestionsList.innerHTML = "";

  suggestions.forEach((pokemon) => {
    const suggestionItem = document.createElement("li");
    suggestionItem.textContent = FirstLetter(pokemon);

    // Add a click event listener to select the suggestion
    suggestionItem.addEventListener("click", () => {
      document.querySelector("#pokemonName").value = FirstLetter(pokemon);
      suggestionsList.innerHTML = ""; // Clear suggestions
    });

    suggestionsList.appendChild(suggestionItem);
  });
}

function getPokemon(e) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      // Get types of the Pokémon
      const types = data.types.map((type) => type.type.name);

      // Create a string to display types
      const typesString = types.join(", ");

      document.querySelector(".pokemonBox").innerHTML = `
        <div>
          <img src="${
            data.sprites.other["official-artwork"].front_default
          }" alt="${FirstLetter(data.name)}">
        </div>
        <div class="pokemonInfo">
          <h1>"${FirstLetter(data.name)}"</h1>
          <p>Types: ${typesString}</p>
          <p>Weight: ${data.weight}</p>
          <p>Height: ${data.height}</p>
        </div>
      `;
    })
    .catch((err) => {
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}
