let character = {}

const getSingleCharacter = async () => {
    const id = new URLSearchParams(window.location.search).get('id')
    const characterURL = `https://rickandmortyapi.com/api/character/${id}`

    const response = await fetch(characterURL)
    const data = await response.json()
    const results = data

    character = {
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        type: data.type,
        origin: data.origin.name,
        episode: data.episode[0],
        gender: data.gender,
        location: data.location.name,
        image: data.image,
    }
}

getSingleCharacter()

const start = async () => {
    const characters = await getSingleCharacter();
    const containerDiv = document.querySelector("#characters")
    const paintCards = (characters) => {

        const characterDiv = document.createElement('div');
        characterDiv.className = 'card';
        characterDiv.innerHTML = `
        <div class="char-id">
        <h2 id="name">${character.name}</h2>
        <h3 id="id">Character ID: ${character.id}</h3>
      </div>

      <div class="img-loc-container">
        <div class="card-image">
          <img src="${character.image}" alt="${character.name}" class="char-img">
        </div>

        <div class="location">
          <h3 id="location">LOCATION: ${character.location}</h3>
          <h3 id="origin">ORIGIN: ${character.origin}</h3>
          <h3 id="type">TYPE: ${character.type}</h3>
        </div>
      </div>

      <div class="card-status">
        <div class="info">
          <div class="value">Status</div>
          <div class="type">${character.status}</div>
        </div>
        <div class="info">
          <div class="value">Species</div>
          <div class="type">${character.species}</div>
        </div>
        <div class="info">
          <div class="value">Gender</div>
          <div class="type">${character.gender}</div>
        </div>
      </div>
        `
        containerDiv.append(characterDiv);

        document.title = `${character.name}`
    }

    paintCards(characters)

}

start()


