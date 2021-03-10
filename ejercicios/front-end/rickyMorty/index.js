
let characterURL = 'https://rickandmortyapi.com/api/character'
let nextUrl = ''

const getCharacters = async () => {
  const response = await fetch(characterURL)
  const data = await response.json()
  const results = Object.values(data.results)
  characterURL = data.info.next

  const formatCharacters = results.map(character => {
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      gender: character.gender,
      location: character.location.name,
      image: character.image,
    };
  });

  return formatCharacters;
}

const start = async () => {
  const characters = await getCharacters();

  const containerDiv = document.querySelector("#characters")


  const paintCards = (characters) => {

    characters.forEach((character) => {
      const characterDiv = document.createElement('div');

      characterDiv.className = 'character-card';

      characterDiv.innerHTML = `
    <div class="headline">
      <h3 class="char-name">${character.name}</h3>
      <h4 class="char-status">${character.status}</h4>
    </div>
        <img src="${character.image}" alt="${character.name}" class="grid-img">
    <div class="bottom">
      <h4 class="char-species">${character.species}</h4>
      <h4 class="char-gender">${character.gender}</h4   >
    </div>
    <h3 class="char-location">${character.location}</h3>
    <a href="character.html?id=${character.id}" class="link">+</a>
    `


      containerDiv.append(characterDiv);

    });

  }

  paintCards(characters)

}

start()


// PUNTO 6 CREACION DEL BOTÓN

// 1. Create the button
const buttonNext = document.createElement("button");
buttonNext.setAttribute("id", "next-button");
buttonNext.innerHTML = "Ver más";

// 2. Append in HTML
const body = document.getElementsByTagName("body")[0];
body.appendChild(buttonNext);

function handleClickNextPageButton() {
  start()
}

const nextPageButton = document.querySelector('#next-button');
nextPageButton.addEventListener('click', handleClickNextPageButton);