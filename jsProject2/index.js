// document.querySelector("#search").addEventListener("click", getPokemon);

// function FirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// function lowerCaseName(string) {
//   return string.toLowerCase();
// }

// function getPokemon(e) {
//   const name = document.querySelector("#pokemonName").value;
//   const pokemonName = lowerCaseName(name);

//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then((response) => response.json())
//     .then((data) => {
//       document.querySelector(".pokemonBox").innerHTML = `
//         <div>
//         <img src="${data.sprites.other["official-artwork"].front_default}"
//             alt="${FirstLetter(data.name)}">
//     </div>
//     <div class="pokemonInfo">
//         <h1>"${FirstLetter(data.name)}"</h1>
//         <p>Weight:"${data.weight}"</p>
//         `;
//     })
//     .catch((err) => {
//       console.log("pokemon not find", err);
//     });

//   e.preventDefault();
// }
document.querySelector("#search").addEventListener("click", getPokemon);

document
  .querySelector("#pokemonName")
  .addEventListener("input", getPokemonSuggestions);

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
      document.querySelector(".pokemonBox").innerHTML = `
        <div>
          <img src="${
            data.sprites.other["official-artwork"].front_default
          }" alt="${FirstLetter(data.name)}">
        </div>
        <div class="pokemonInfo">
          <h1>"${FirstLetter(data.name)}"</h1>
          <p>Weight:"${data.weight}"</p>
        `;
    })
    .catch((err) => {
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}
